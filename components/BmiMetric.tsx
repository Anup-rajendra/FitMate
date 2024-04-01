"use client";
import React, { useState } from "react";
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

const FormSchema = z.object({
  age: z
    .string()
    .min(1, {
      message: "Enter the height",
    })
    .max(3),
  height: z
    .string()
    .min(1, {
      message: "Enter the height",
    })
    .max(3),
  weight: z
    .string()
    .min(1, {
      message: "Enter the weight",
    })
    .max(3),
});
interface BmiMetricProps {
  onBmiChange: (bmi: number) => void;
}
const BmiMetric: React.FC<BmiMetricProps> = ({ onBmiChange }) => {
  const [bmiData, setBmiData] = useState<number | null>();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(data);
      const response = await fetch("/api/bmi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const bmi = await response.json();
        setBmiData(bmi);
        onBmiChange(bmi);
      }
    } catch (error) {
      console.error("Error during Post request or GET request", error);
    }
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      age: "",
      height: "",
      weight: "",
    },
  });
  return (
    <Card className="w-[400px] bg-muted">
      <CardHeader>
        <CardTitle>Calculate BMI in Metric units</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Age</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Height(in cm)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter height" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Weight(in kg)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter weight" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        {/* {bmiData !== 0 && (
          <div className="mt-3">
            <p>Your BMI: {bmiData ? bmiData : 0}</p>
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};

export default BmiMetric;
