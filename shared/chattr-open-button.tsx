import React from "react";

import ChattrOpenIcon from "./chattr-open-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ChattrOpenButton({ toggle }: { toggle: () => void }) {
  return (
    <div className="flex items-center justify-center z-50 fixed rounded-full bg-background w-16 bottom-4 right-4">
      <Image
        src="/chatbot.svg"
        height={60}
        width={60}
        alt="chatbot"
        onClick={toggle}
      />
    </div>
  );
}
