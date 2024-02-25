// pages/dashboard/sidebar.tsx
import React from "react";
import DropDown from "./Dropdown";
import UserInfo from "./Userinfo";
import Link from "next/link";
import { SquareUserRound } from "lucide-react";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface SideBarProps {
  projectNames?: string[];
  NoOfTasks?: number[];
}
interface Project {
  project_id: number;
  project_name: string;
  totalTasks: number;
}

const SideBar: React.FC<SideBarProps> = ({ projectNames, NoOfTasks }) => {
  console.log("ProjectNames in SideBar:", projectNames);
  console.log("NoOfTasks in SideBar:", NoOfTasks);
  return (
    <div>
      <div className="pb-7">
        <UserInfo />
      </div>
      <Link href="/dashboard/profile">
        <div className="pl-4 flex items-center">
          <div>
            <SquareUserRound />
          </div>
          <div className="pl-2">Profile</div>
        </div>
      </Link>
      <div>
        <DropDown props={projectNames} NoOfTasks={NoOfTasks} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  console.log("running serverside....");
  const session = await getServerSession(authOptions);
  const user_id = Number(session?.user.id);
  console.log("USER_ID", user_id);

  try {
    // Fetch project names
    const projects = await db.project.findMany({
      where: { user_id: user_id },
      select: { project_name: true },
    });

    // Extract project names from the result
    const projectNames = projects.map((project) => project.project_name);
    console.log("Project Names:", projectNames);

    // Fetch project tasks counts
    const projectsWithTaskCounts: Project[] = await db.$queryRaw`SELECT
      project_id,
      project_name,
      (
        SELECT COUNT(*)
        FROM tasks
        WHERE section_id IN (SELECT section_id FROM sections WHERE project_id = p.project_id)
      ) AS totalTasks
      FROM projects p
      WHERE user_id = ${user_id}`;

    console.log(projectsWithTaskCounts);

    // Extract the total task counts for each project
    const NoOfTasks = projectsWithTaskCounts.map(
      (project) => project.totalTasks
    );

    // Return the project names and task counts as props
    return {
      props: {
        projectNames,
        NoOfTasks,
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        projectNames: [],
        NoOfTasks: [], // or handle the error in an appropriate way
      },
    };
  }
}
export default SideBar;