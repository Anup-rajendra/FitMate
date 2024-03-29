import React from "react";

type ChattrAssistantMessage = {
  key?: string;
  content?: string;
  chattrBotName?: string;
};

export default function ChattrAssistantMessage({
  key,
  content,
  chattrBotName = "Chattrbot",
}: ChattrAssistantMessage) {
  return (
    <div key={key} className="mb-3 flex justify-start">
      <div className="rounded-chattrRoundedLarge bg-chattrPrimary px-3 py-2 dark:bg-chattrPrimaryDark">
        <p className="max-w-full break-words text-sm font-light text-chattrTextDark">
          {content}
        </p>
      </div>
    </div>
  );
}
