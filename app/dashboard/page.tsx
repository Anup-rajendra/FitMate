"use client";
import Reac from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BmiMetric from "@/components/BmiMetric";
import BmiUs from "@/components/BmiUs";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row items-center justify-evenly">     
      <div> 
        <Tabs defaultValue="Metric" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Metric">Metric Units</TabsTrigger>
            <TabsTrigger value="US">US Units</TabsTrigger>
          </TabsList>
          <TabsContent value="Metric">
            <BmiMetric />
          </TabsContent>
          <TabsContent value="US">
            <BmiUs />
          </TabsContent>
        </Tabs>
        </div>  
        <div> 
        <Image alt="Bmi classification" src="/table.png" height={1000} width={600} className="h-[300px]"/>
        </div>
      </div>
    </>
  );
};

export default Page;
