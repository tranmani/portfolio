/* eslint-disable react-hooks/exhaustive-deps */
import SendButton from "@/components/shared/icons/SendButton";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useInView } from "framer-motion";
import DeliveredIcon from "@/components/shared/icons/DeliveredIcon";
import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import Typing from "./Typing";
import useMediaQuery from "@/lib/hooks/use-media-query";

interface IChatWindow {}

export interface IChatMessage {
  id: number;
  content: string;
  isMe: boolean;
  time?: string;
}

const messagesRaw: IChatMessage[] = [
  {
    id: 1,
    content: "Hello",
    isMe: true,
    time: "12:00",
  },
  {
    id: 2,
    content: "Hi",
    isMe: false,
    time: "12:00",
  },
  {
    id: 3,
    content: "How are you?",
    isMe: true,
    time: "12:00",
  },
  {
    id: 4,
    content: "I'm fine, thank you",
    isMe: false,
    time: "12:00",
  },
  {
    id: 5,
    content: "What about you?",
    isMe: true,
    time: "12:00",
  },
  {
    id: 6,
    content: "I'm fine too",
    isMe: false,
    time: "12:00",
  },
  {
    id: 7,
    content: "What are you doing?",
    isMe: true,
    time: "12:00",
  },
  {
    id: 8,
    content: "I'm coding",
    isMe: false,
    time: "12:00",
  },
  {
    id: 9,
    content: "What are you coding?",
    isMe: true,
    time: "12:00",
  },
  {
    id: 10,
    content: "I'm coding a chat app",
    isMe: false,
    time: "12:00",
  },
  {
    id: 11,
    content: "Wow, that's cool",
    isMe: true,
    time: "12:00",
  },
  {
    id: 12,
    content: "Yeah, it is",
    isMe: false,
    time: "12:00",
  },
  {
    id: 13,
    content: "Can I see it?",
    isMe: true,
    time: "12:00",
  },
  {
    id: 14,
    content: "Sure, here is the link",
    isMe: false,
    time: "12:00",
  },
  {
    id: 15,
    content: "https://tranmani.com",
    isMe: false,
    time: "12:00",
  },
];

const ChatWindow: React.FC<IChatWindow> = ({}) => {
  const { theme } = React.useContext(ThemeContext);
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<IChatMessage[]>([]);
  const chatEndRef = React.useRef<HTMLDivElement>(null);
  const chatBodyRef = React.useRef<HTMLDivElement>(null);
  const chatInputRef = React.useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = React.useState<boolean>(false);
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [isSendEmailButton, setIsSendEmailButton] = React.useState<boolean>(false);
  const isInView = useInView(chatBodyRef, { once: true });
  const isChatInputInView = useInView(chatInputRef, { once: true });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const scroll = () => {
    if (chatEndRef.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Send first messages to guest
  React.useEffect(() => {
    if (isInView && messages.length === 0) {
      replyBack(["Hello stranger, my name is Huy", "What is your name?"]).then(() => {
        if (isChatInputInView) chatInputRef.current?.focus();
      });
    }
  }, [isInView, messages]);

  // Watch for new messages
  React.useEffect(() => {
    if (messages.length >= (isMobile ? 5 : 10)) {
      scroll();
    }
    // If there are 2 messages, then it's the first time the guest is chatting
    if (messages.length === 3) {
      const regex = /(\bmy name is\b|\bi'm\b|\bi am\b|\bit's\b|\bit is\b|\byou can call me\b)[^a-zA-Z0-9_]+/gi;
      const cleanedStr = messages[2].content.replace(regex, "");
      setUserName(cleanedStr);
      replyBack([`Hi ${cleanedStr}, nice to meet you!`, `What is your email?`]);
    }
    if (messages.length === 6) {
      const cleanedEmail = messages[5].content.replace(" ", "");
      setUserEmail(cleanedEmail);
      replyBack([`I got your email`, `What message do you want to leave for me?`]);
    }
    // Show SEND EMAIL button
    if (messages.length === 9) {
      replyBack(
        [`You can still write more messages, when you are done, press SEND EMAIL button to send your message to me`],
        true,
      );
    }
    // Remind guest to click SEND EMAIL button
    if (messages.length === 15 && isSendEmailButton) {
      replyBack([`Remember to click SEND EMAIL button to send your messages to me ;)`]);
    }
    if (messages.length === 20 && isSendEmailButton) {
      replyBack([`You must have a lot to say to me, right?`]);
    }
    if (messages.length === 25 && isSendEmailButton) {
      replyBack([`You must be bored, I suppose?`]);
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const timeOut = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // Send message back to guest
  const replyBack = async (messagesToSent: string[], showButton: boolean = false, resetChat: boolean = false) => {
    setIsTyping(true);
    await timeOut(isMobile ? 50 : 10);
    if (messages.length >= 10) {
      scroll();
    }
    await timeOut(1500);
    for (let i = 0; i < messagesToSent.length; i++) {
      setMessages((messages) => [
        ...messages,
        {
          id: messages.length + 1,
          content: messagesToSent[i],
          isMe: false,
          time: getCurrentTime(),
        },
      ]);
      if (i < messagesToSent.length - 1) await timeOut(1100);
    }
    setIsTyping(false);
    if (showButton) {
      setIsSendEmailButton(true);
    }
    if (resetChat) {
      await timeOut(6000);
      setMessages([]);
      setUserEmail("");
      setUserName("");
      setIsSendEmailButton(false);
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    let hour = currentTime.getHours().toString();
    let minute = currentTime.getMinutes().toString();
    if (parseInt(hour) < 10) hour = `0${hour}`;
    if (parseInt(minute) < 10) minute = `0${minute}`;
    return `${hour}:${minute}`;
  };

  const handleSendMessage = () => {
    if (!message) return;
    if (isTyping) return;
    setMessage("");

    setMessages((messages) => [
      ...messages,
      {
        id: messages.length + 1,
        content: message,
        isMe: true,
        time: getCurrentTime(),
      },
    ]);
  };

  // handle send email button
  const handleEmailButtonClick = async () => {
    if (isTyping) return;
    if (!userEmail) {
      replyBack([`You haven't typed your email yet`]);
      return;
    }
    if (!userName) {
      replyBack([`You haven't typed your name yet`]);
      return;
    }
    if (messages.length < 8) {
      replyBack([`You haven't typed your messages yet`]);
      return;
    }
    setIsSendEmailButton(false);
    const messagesToSent = messages.slice(2).filter((message) => message.isMe);
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ userName, userEmail, messagesToSent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.message === "Email sent successfully") {
      replyBack(
        [`Sending your messages to me...`, `Success ╰(*°▽°*)╯`, `The chat will be reset after 5 seconds`],
        false,
        true,
      );
    } else if (data.message === "Invalid email") {
      replyBack(
        [
          `Sending your messages to me...`,
          `Failed, your email is invalid (┬┬﹏┬┬)`,
          `The chat will be reset after 5 seconds`,
        ],
        false,
        true,
      );
    } else {
      replyBack([`Unfortunately, there was an error sending your messages to me. Please try again later`]);
      setIsSendEmailButton(true);
    }
  };

  return (
    <>
      <div className="relative h-min w-full max-w-[600px] overflow-hidden rounded-xl shadow-xl dark:shadow-none">
        {/* Chat background */}
        <ChatBG className="absolute top-0 left-0 h-full w-full bg-[url('/chat-bg.png')] opacity-[0.8] dark:opacity-[0.1]" />
        {/* chat header */}
        <div className="relative z-[99] flex h-14 select-none justify-between bg-[#f0f2f5] py-2 px-4 dark:bg-[#202c33]">
          <div className="flex items-center">
            <Image
              src={"/logo.webp"}
              width={40}
              height={40}
              className="rounded-full"
              alt="Huy Tran's picture"
              priority
            />{" "}
            <span className="ml-4 font-[500]">Huy Tran</span>
          </div>
          <div></div>
        </div>
        {/* chat body */}
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
                  <ChatMessageTailOut
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
                  </ChatMessageTailOut>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isMobile ? 0 : 15 }}
            >
              <Typing />
            </motion.div>
          )}
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
        {/* chat footer */}
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
      </div>
    </>
  );
};

export default ChatWindow;

const ChatBG = styled.div`
  object-fit: cover;
  background-size: cover;
  background-position: top;
  background-repeat: repeat-y;
`;

export const ChatMessageTailOut = styled.div`
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
