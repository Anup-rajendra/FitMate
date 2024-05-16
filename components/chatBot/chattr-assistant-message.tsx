import React from "react";

type ChattrAssistantMessage = {
  key?: string;
  content?: string;
  chattrBotName?: string;
};

export default function ChattrAssistantMessage({
  key,
  content,
  chattrBotName = "Fitbot",
}: ChattrAssistantMessage) {
  return (
    <div key={key} className="mb-3 flex justify-start">
      <div className="rounded-chattrRoundedLarge bg-primary px-3 py-2 dark:bg-chattrPrimaryDark">
        <p className="max-w-[160px] break-words text-sm  text-primary-foreground">
          {content}
        </p>
      </div>
      <p className="flex items-center pl-2 text-sm font-semibold tracking-normal text-chattrText dark:text-chattrTextDark">
        {chattrBotName}
      </p>
    </div>
  );
}
