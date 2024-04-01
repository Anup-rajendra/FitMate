import React from "react";
import { underweight } from "@/shared/exerciseTypes";
import Image from "next/image";

const Under = () => {
  return (
    <div className="w-full px-8 flex flex-col items-center justify-center pb-10">
      <div className="border-2 flex flex-col items-center rounded-xl shadow-white shadow-md bg-muted pl-10">
        <p className="text-3xl font-bold mb-10 text-foreground pt-10">
          Exercise Recommendation
        </p>
        {Object.keys(underweight).map((exercise, index) => (
          <div key={index} className="mb-8 w-[900px]  text-foreground">
            <p className="text-2xl font-semibold">{exercise}:</p>
            <br />
            <ol className="list-decimal">
              {" "}
              {/* Use list-decimal for ordered lists */}
              {underweight[exercise].description
                .split("->")
                .filter((point) => point.trim() !== "") // Filter out empty points
                .map((point, i) => (
                  <li key={i}>{point.trim()}</li>
                ))}
            </ol>
            <Image
              src={underweight[exercise].img}
              height={500}
              width={500}
              alt={exercise}
              className="mt-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Under;
