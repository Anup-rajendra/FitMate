"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React,{useState} from "react";
// import BmiArc from "./BmiArc";

const FormSchema1 = z.object({
  height1: z
    .string()
    .min(1, {
      message: "Enter the height in feet",
    })
    .max(3),
  height2: z
    .string()
    .min(1, {
      message: "Enter the height in inches",
    })
    .max(3),
  weight1: z
    .string()
    .min(1, {
      message: "Enter the weight",
    })
    .max(3),
});


const BmiUs = () => {
  const [bmiData, setBmiData] = useState<number | null>(); 
  async function onSubmit(data: z.infer<typeof FormSchema1>) {
    try {
      console.log(data);
      const response = await fetch("/api/bmiUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setBmiData(await response.json());
      }
    } catch (error) {
      console.error("Error during Post request or GET request", error);
    }
  }
  const form1 = useForm<z.infer<typeof FormSchema1>>({
    resolver: zodResolver(FormSchema1),
    defaultValues: {
      height1: "",
      height2: "",
      weight1: "",
    },
  });
  return (
    <>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Calculate BMI in US units</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form1}>
            <form onSubmit={form1.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-row items-center">
                <div>
                  <FormField
                    control={form1.control}
                    name="height1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Height(in feet)</FormLabel>
                        <FormControl>
                          <Input placeholder="feet" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form1.control}
                    name="height2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-end">(in inches)</FormLabel>
                        <FormControl>
                          <Input placeholder="inches" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form1.control}
                name="weight1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Weight(in pounds)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter weight in pounds" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>

          {bmiData && (
            <div className="mt-3">
              <p>Your BMI: {bmiData}</p>
            </div>
          )}
        </CardContent>
      </Card>
      {/* {bmiData && (
        <div className="my-5">
          <BmiArc bmi={bmiData} />
        </div>
      )} */}
    </>
  );
};

export default BmiUs;
