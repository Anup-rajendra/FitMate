import React, { useEffect, useState } from "react";

interface DietProps {
  category: string;
  bmi: number;
}

const Diet = ({ category, bmi }: DietProps) => {
  const [dietInfo, setDietInfo] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function getDietRecommendation() {
      try {
        const bmiString = bmi.toString();
        const response = await fetch("/api/diet", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Category: category,
            Bmi: bmiString,
          },
        });
        if (response.ok) {
          const dietRecommendation = await response.json();
          setDietInfo(dietRecommendation);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Failed to fetch diet recommendations", error);
        setError("Failed to load diet information.");
      }
    }

    getDietRecommendation();
  }, [category, bmi]);

  return (
    <div className="w-full px-8 flex flex-col items-center justify-center pb-10">
      <div className="border-2 flex flex-col items-center rounded-xl shadow-white shadow-md bg-muted">
        <p className="text-3xl font-bold mb-10 mt-10 text-foreground">
          Diet Recommendation
        </p>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="w-[932px] px-10 text-foreground pb-10">
            {dietInfo}
          </div>
        )}
      </div>
    </div>
  );
};

export default Diet;
