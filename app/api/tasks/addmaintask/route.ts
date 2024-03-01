import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
interface NewMainTaskId {
  task_id: number;
}

export async function POST(req: Request) {
  try {
    const jsonBody = await req.json();
    const task_name = jsonBody.data.taskname;
    const subtask_name = jsonBody.data.subtaskname;
    const section = req.headers.get("Encoded-value");
    if (section) {
      const section_id = Number(decodeURIComponent(section));

      if (!task_name) {
        return Response.json({ message: "Task name is required" });
      }

      const newTask = await db.task.create({
        data: {
          section_id: section_id,
          task_name: task_name,
          is_main_task: true,
          is_completed: false,
        },
      });
      if (subtask_name) {
        const maintaskId: NewMainTaskId = await db.$queryRaw`
        select task_id from "Task" where task_name=${task_name}`;
        const maintask_id: number = maintaskId[0]?.task_id;
        if (!maintaskId) {
          console.log("error");
          return Response.json({ message: "Internal server error" });
        }

        const newSubtask = await db.task.create({
          data: {
            section_id: section_id,
            parent_task_id: maintask_id,
            task_name: subtask_name,
            is_main_task: false,
            is_completed: false,
          },
        });
      }

      return Response.json(newTask);
    }
  } catch (error) {
    console.error("Error adding task to the database:", error);
    return Response.json({ message: "Internal server error" });
  }
}
