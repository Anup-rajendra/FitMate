import React from "react";

export default function ChattrContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-chattrRoundedLarge border-chattrGray bg-chattrWhite dark:border-chattrText dark:bg-chattrPitchBlack fixed bottom-4 right-4 z-20 flex h-[600px]  w-96 flex-col justify-between border shadow">
      {children}
    </div>
  );
}
