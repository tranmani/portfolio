import DeliveredIcon from "@/components/shared/icons/DeliveredIcon";
import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { IChatMessage } from "./ChatWindow";
import Typing from "./Typing";

interface IChatBody {
  isTyping: boolean;
  chatBodyRef: React.RefObject<HTMLDivElement>;
  messages: IChatMessage[];
  isSendEmailButton: boolean;
  handleEmailButtonClick: () => void;
  chatEndRef: React.RefObject<HTMLDivElement>;
}

const ChatBody: React.FC<IChatBody> = ({
  isTyping,
  chatBodyRef,
  messages,
  isSendEmailButton,
  handleEmailButtonClick,
  chatEndRef,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className="scrollbar-hide z-[2] h-[300px] overflow-y-scroll overscroll-contain bg-[#efeae2] px-6 py-2 dark:bg-[#182229] sm:h-[500px]"
      ref={chatBodyRef}
    >
      <AnimatePresence>
        {messages.map((message) => {
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: isMobile ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-1 flex items-center gap-4 ${message.isMe ? "justify-end" : "justify-start"}`}
            >
              <ChatMessage
                className={`relative z-[99] flex max-w-max items-end rounded-b-lg rounded-tl-lg py-1 px-1.5 before:border-b-[11px] before:border-b-transparent 
                  ${
                    message.isMe
                      ? "bg-[#d9fdd3] before:right-[-6px] before:border-l-[9px] dark:bg-[#005c4b]"
                      : "bg-[#fff] before:left-[-6px] before:border-r-[9px] dark:bg-[#202c33]"
                  }
                  ${
                    messages.length > 1 && messages[message.id - 1].isMe
                      ? "before:border-r-[0px]"
                      : "before:border-r-[9px]"
                  }
                  ${
                    theme === "dark"
                      ? "before:border-r-[#202c33] before:border-l-[#005c4b]"
                      : "before:border-r-[#fff] before:border-l-[#d9fdd3]"
                  }
                  `}
              >
                <span className="w-full max-w-[200px] sm:max-w-[400px] lg:max-w-[500px]">{message.content}</span>
                <ChatTime className="text-[#667781] dark:text-[rgba(255,255,255,0.5)]">{message.time}</ChatTime>
                {message.isMe && (
                  <span className="mb-0.5">
                    <DeliveredIcon />
                  </span>
                )}
              </ChatMessage>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Typing animation */}
      {isTyping && (
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isMobile ? 0 : 15 }}
        >
          <Typing />
        </motion.div>
      )}
      {/* Send email button */}
      {isSendEmailButton && (
        <div className="flex items-center justify-center">
          <motion.button
            initial={{ opacity: 0, y: isMobile ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isMobile ? 0 : 15 }}
            className="mt-2 rounded-md bg-[#d9fdd3] py-1 px-2 uppercase dark:bg-[#005c4b]"
            onClick={handleEmailButtonClick}
            whileHover={{ scale: 0.9 }}
          >
            Send Email
          </motion.button>
        </div>
      )}
      <div ref={chatEndRef}></div>
    </div>
  );
};

export default ChatBody;

const ChatMessage = styled.div`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    width: 6px;
    height: 13px;
  }
`;

const ChatTime = styled("span")`
  font-size: 0.6rem;
  margin: 0 0.25rem;
  user-select: none;
`;
