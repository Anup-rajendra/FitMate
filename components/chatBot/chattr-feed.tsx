import React from "react";
import { ChattrMessage } from "../../types";
import { useScroll } from "../../hooks";
import ChattrMessages from "./chattr-messages";
import ChattrLoader from "./chattr-loader";
import "./chatbot.css";

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
      className="max-h-[600px] flex-auto overflow-y-scroll  scrollbar px-3"
    >
      <div className="mb-3"></div>
      {/* Static messages */}
      {[
        {
          role: "assistant" as const,
          content:
            " Hey! Thanks for visiting. I'm Fitmate, you can ask me anything!",
        },
        {
          role: "user" as const,
          content: "Fitmate, my friends BMI is 27.",
        },
        {
          role: "assistant" as const,
          content: `A BMI of 27 suggests your friend might be in the overweight range. Consider
            incorporating a mix of cardiovascular exercises like brisk walking
            and strength training to improve overall health and fitness.`,
        },
      ].map((message, i) => (
        <ChattrMessages
          key={`${message.role}_message_${i}`}
          message={{ ...message }}
          userName={userName}
          chattrBotName={chattrBotName}
        />
      ))}
      {loading && <ChattrLoader chattrBotName={chattrBotName} />}
    </div>
  );
}

export default React.memo(ChattrFeed);
