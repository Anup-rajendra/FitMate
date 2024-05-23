"use client";
import React from "react";
import Chattrbot from "@/components/chatBot/chattrbot";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full dark bg-background">
        <section className="flex items-center justify-between pt-8 text-sm leading-5 text-opacity-90 pb-10 px-10 border-b-2">
          <div className="flex w-full justify-between items-center">
            <Image alt="Fitmate Logo" height={100} width={100} src="/fit.png" />
            <div>
              <div className="flex gap-5 items-center justify-center px-6 py-2 border border-solid bg-opacity-0 border-b border-foreground border-opacity-10 rounded-[9999px] shadow-xl dark text-foreground bg-muted">
                <Link
                  href="/dashboard/#bmi-calculator"
                  className="  whitespace-nowrap scroll-smooth"
                >
                  BMI Calculator
                </Link>
                <Link
                  href="/dashboard/#diet-recommendation"
                  className="  whitespace-nowrap scroll-smooth"
                >
                  Diet Recommendation
                </Link>
                <Link
                  href="/dashboard/#exercise-recommendation"
                  className="  whitespace-nowrap scroll-smooth"
                >
                  Exercise Recommendation
                </Link>
              </div>
            </div>
            <div>
              <Button onClick={() => signOut({ callbackUrl: "/sign-in" })}>
                Logout
              </Button>
            </div>
          </div>
          <hr className="shrink-0 mt-5 h-px max-md:max-w-full" />
        </section>
        <div className="w-full">{children}</div>
      </div>
      <div>
        <Chattrbot />
      </div>
    </div>
  );
}
