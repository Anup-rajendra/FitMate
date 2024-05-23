import React from "react";
import { underweight, AllWeights } from "@/shared/exerciseTypes";
import Image from "next/image";

interface ExerciseProps {
  category: string;
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Under = ({ category }: ExerciseProps) => {
  const exercises = AllWeights[category];
  const exerciseNames = Object.keys(exercises);
  const shuffledExerciseNames = shuffleArray(exerciseNames);
  const selectedExercises = shuffledExerciseNames.slice(0, 5);

  return (
    <div className="w-full px-8 flex flex-col items-center justify-center pb-10">
      <div className="border-2 flex flex-col items-center rounded-xl shadow-white shadow-md bg-muted pl-10">
        <p className="text-3xl font-bold mb-10 text-foreground pt-10">
          Exercise Recommendation
        </p>
        {selectedExercises.map((exercise, index) => (
          <div key={index} className="mb-8 w-[900px] text-foreground">
            <p className="text-2xl font-semibold">{exercise}:</p>
            <br />
            <ol className="list-decimal">
              {exercises[exercise].description
                .split("->")
                .filter((point) => point.trim() !== "")
                .map((point, i) => (
                  <li key={i}>{point.trim()}</li>
                ))}
            </ol>
            <Image
              src={exercises[exercise].img}
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
