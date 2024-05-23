"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { signIn } from "next-auth/react";
const FormSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).max(100),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(5, {
      message: "Password must have 6 characters",
    }),
});
export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    const signInData = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log(signInData.error);
      toast.error("Failed To Login", {
        description: "Incorrect Username or Password",
      });
      setLoading(false);
    } else {
      console.log(router);
      router.push("/dashboard");
    }
  };
  return (
    <>
      <Toaster closeButton richColors />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input id="Username" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div className="flex justify-end">
            <Link className="text-blue-800 text-sm" href="/password">
              <p>Forgot Password?</p>
            </Link>
          </div> */}

          <Button type="submit" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </Button>
          <p className="text-center text-sm text-gray-600 mt-2">
            If you don&apos;t have an account, please&nbsp;
            <Link className="text-blue-500 hover:underline" href="/sign-up">
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};
