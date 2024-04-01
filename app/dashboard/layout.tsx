import React from "react";
import Chattrbot from "@/components/chatBot/chattrbot";
import Image from "next/image";
export default function ChattrContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full dark bg-background">
        <section className="flex items-center justify-center  pt-8 text-sm leading-5   text-opacity-90 pb-10  max-md:px-5 gap-96 border-b-2">
          <Image alt="Fitmate Logo" height={100} width={100} src="/fit.png" />
          <div className="flex gap-5 justify-center  max-md:flex-wrap">
            <div className="flex gap-5 justify-between px-6 py-2 border border-solid  bg-opacity-0 border-b border-foreground border-opacity-10 rounded-[999px] max-md:px-5 shadow-xl dark text-foreground bg-muted">
              <div className="grow whitespace-nowrap">BMI Calculator</div>
              <div className="flex-auto">Diet Recommendation</div>
              <div className="grow whitespace-nowrap">
                Exercise Recommendation
              </div>
            </div>
          </div>
          <hr className="shrink-0 mt-5 h-px max-md:max-w-full" />
        </section>
        <div className=" w-full">{children}</div>
      </div>
      <div>
        <Chattrbot />
      </div>
    </div>
  );
}
// bg-gradient-to-b from-midnight to-slate-700
//bg-gradient-to-b from-midnight to-slate-900
