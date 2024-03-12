import React from "react";

import { useScroll } from "../../hooks";

import ChattrMessages from "./chattr-messages";
import ChattrLoader from "./chattr-loader";

import { ChattrMessage } from "../../types";

function ChattrFeed({
  messages,
  userName,
  chattrBotName,
  loading,
}: {
  messages: ChattrMessage[];
  userName?: string;
  chattrBotName?: string;
  loading?: boolean;
}) {
  const ref = useScroll(messages);

  return (
    <div
      ref={ref}
      className="h-full flex-auto  px-3 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 bg-primary-foreground"
    >
      <div className="mb-3 "></div>
      {/* {messages.map((message, i) => (
        <ChattrMessages
          key={`${message.role}_message_${i}`}
          message={message}
          userName={userName}
        />
      ))} */}
      <div className="flex flex-col gap-8">
        <div className="flex w-[300px] border rounded-full border-midnight text-sm p-2">
          Hey! Thanks for visiting. I&apos;m Fitmate, you can ask me anything!
        </div>
        <div className="pl-14">
          <div className="px-4 py-3  flex justify-end w-[300px] border rounded-full border-midnight text-sm  ">
            Fitmate, my BMI is 23. Is that considered healthy, or should I
            consider other factors for a better assessment of my overall health?
          </div>
        </div>
        <div>
          <div className="px-5 py-4  flex justify-end w-[340px] border rounded-full border-midnight text-sm  ">
            A BMI of 27 suggests you might be in the overweight range. Consider
            incorporating a mix of cardiovascular exercises like brisk walking
            and strength training to improve overall health and fitness.
          </div>
        </div>
      </div>
      {loading && <ChattrLoader chattrBotName={chattrBotName} />}
    </div>
  );
}

export default React.memo(ChattrFeed);
