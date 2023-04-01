import SendButton from "@/components/shared/icons/SendButton";
import React from "react";

interface IChatFooter {
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
  chatInputRef: React.RefObject<HTMLInputElement>;
  isTyping: boolean;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatFooter: React.FC<IChatFooter> = ({
  handleKeyDown,
  handleSendMessage,
  chatInputRef,
  isTyping,
  message,
  setMessage,
}) => {
  return (
    <div className="relative z-[99] flex h-16 bg-[#f0f2f5] py-2 px-3 dark:bg-[#202c33] md:px-6">
      {/* Chat text box */}
      <div className="basis-[90%] px-3 py-1">
        <input
          ref={chatInputRef}
          readOnly={isTyping ? true : false}
          onKeyDown={handleKeyDown}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-full w-full rounded-md border-transparent border-[#fff] bg-[#fff] focus:border-transparent focus:ring-0 dark:border-[#2a3942] dark:bg-[#2a3942]"
        />
      </div>
      {/* Chat send button */}
      <div
        className="flex h-full w-10 basis-[10%] cursor-pointer items-center justify-center rounded-md"
        onClick={handleSendMessage}
      >
        <SendButton />
      </div>
    </div>
  );
};

export default ChatFooter;
