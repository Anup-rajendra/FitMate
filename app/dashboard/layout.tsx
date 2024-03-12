import React from "react";
import Chattrbot from "@/components/chatBot/chattrbot";
export default function ChattrContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-midnight to-slate-700 ">
        <section className="flex flex-col items-center justify-center px-20 pt-6 text-sm leading-5 bg-gradient-to-b from-midnight to-slate-900  text-white text-opacity-90 max-md:px-5">
          <div className="flex pr-[1350px] text-4xl text-white">FitMate</div>
          <div className="flex gap-5 justify-center max-w-full w-[841px] max-md:flex-wrap">
            <div className="flex gap-5 justify-between px-6 py-3 border border-solid  bg-opacity-0 border-b border-white border-opacity-10 rounded-[999px] max-md:px-5">
              <div className="grow whitespace-nowrap">BMI Calculator</div>
              <div className="flex-auto">Diet Recommendation</div>
              <div className="grow whitespace-nowrap">Exercise Recommendation</div>
            </div>
          </div>
          <hr className="shrink-0 mt-5 h-px max-md:max-w-full" />
        </section>
        <div className="bg-[url('/cardio.jpg')] w-full">{children}</div>
      </div>
      <div>
        <Chattrbot />
      </div>
    </div>
  );
}
