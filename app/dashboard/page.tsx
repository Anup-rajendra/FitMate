"use client";
import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BmiMetric from "@/components/BmiMetric";
import BmiUs from "@/components/BmiUs";
import BmiArc from "@/components/BmiArc";
import Under from "@/components/exercise/underweight";
import Diet from "@/components/diet/diet";

const Page = () => {
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState<string>();
  const bmiRef = useRef<HTMLDivElement>(null);
  const dietRef = useRef<HTMLDivElement>(null);
  const exerciseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bmi < 18.5 && bmi !== 0) {
      setCategory("underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setCategory("normalweight");
    } else if (bmi >= 25 && bmi < 30) {
      setCategory("overweight");
    } else if (bmi >= 30) {
      setCategory("obese");
    }
  }, [bmi]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#bmi-calculator" && bmiRef.current) {
      bmiRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#diet-recommendation" && dietRef.current) {
      dietRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#exercise-recommendation" && exerciseRef.current) {
      exerciseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [bmi]);

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-row items-center justify-evenly"
        id="bmi-calculator"
        ref={bmiRef}
      >
        <div>
          <Tabs
            defaultValue="Metric"
            className="w-[400px] shadow-white shadow-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Metric">Metric Units</TabsTrigger>
              <TabsTrigger value="US">US Units</TabsTrigger>
            </TabsList>
            <TabsContent value="Metric">
              <BmiMetric onBmiChange={setBmi} />
            </TabsContent>
            <TabsContent value="US">
              <BmiUs onBmiChange={setBmi} />
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <BmiArc bmi={bmi} />
        </div>
      </div>
      <div id="diet-recommendation" ref={dietRef}>
        {bmi > 0 && category && <Diet category={category} bmi={bmi} />}
      </div>
      <div
        id="exercise-recommendation"
        ref={exerciseRef}
        className="scroll-smooth"
      >
        {category && <Under category={category} />}
      </div>
    </>
  );
};

export default Page;
