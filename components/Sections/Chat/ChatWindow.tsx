import SendButton from "@/components/shared/icons/SendButton";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import TailIn from "@/components/shared/icons/TailIn";
import TailOut from "@/components/shared/icons/TailOut";
import DeliveredIcon from "@/components/shared/icons/DeliveredIcon";
import { ThemeContext } from "@/lib/hooks/use-dark-mode";

interface IChatWindow {}

interface IChatMessage {
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
  const [messages, setMessages] = React.useState<IChatMessage[]>(messagesRaw);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (chatEndRef.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (messages.length >= 5) {
      scroll();
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (!message) return;
    setMessage("");
    const currentTime = new Date();
    let hour = currentTime.getHours().toString();
    let minute = currentTime.getMinutes().toString();
    if (parseInt(hour) < 10) hour = `0${hour}`;
    if (parseInt(minute) < 10) minute = `0${minute}`;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        content: message,
        isMe: true,
        time: `${hour}:${minute}`,
      },
    ]);
  };

  // const checkIfLastMessageIsMe = (index: number) => {
  //   if (messages[index - 1].isMe) {
  //     console.log(messages[index - 1].isMe);

  //     return true;
  //   } else return false;
  // };

  // const calculation = useMemo(() => checkIfLastMessageIsMe(index), [messages]);

  return (
    <div className="relative h-min w-full max-w-[600px] overflow-hidden rounded-xl shadow-xl dark:shadow-none">
      <ChatBG className="absolute top-0 left-0 h-full w-full bg-[url('/chat-bg.png')] opacity-[0.4] dark:opacity-[0.06]" />
      {/* chat header */}
      <div className="relative z-[99] flex h-14 select-none justify-between bg-[#f0f2f5] py-2 px-4 dark:bg-[#202c33]">
        <div className="flex items-center">
          <Image src={"/logo.webp"} width={40} height={40} className="rounded-full" alt="Huy Tran's picture" priority />{" "}
          <span className="ml-4 font-[500]">Huy Tran</span>
        </div>
        <div></div>
      </div>
      {/* chat body */}
      <div className="scrollbar-hide z-[2] h-[300px] overflow-y-scroll overscroll-contain bg-[#efeae2] px-6 py-2 dark:bg-[#182229] ">
        <AnimatePresence>
          {messages.map((message) => {
            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mb-1 flex items-center gap-4 ${message.isMe ? "justify-end" : "justify-start"}`}
              >
                {message.isMe ? (
                  <ChatMessageTailOut
                    className={`relative z-[99] flex max-w-max items-end rounded-b-lg rounded-tl-lg bg-[#d9fdd3] py-1 px-1.5 dark:bg-[#005c4b]`}
                    borderWidth={messages[message.id - 1].isMe ? 0 : 9}
                    tailOutColor={theme === "dark" ? "#005c4b" : "#d9fdd3"}
                  >
                    <span className="w-full max-w-[200px] sm:max-w-[400px] lg:max-w-[500px]">{message.content}</span>
                    <ChatTime className="text-[#667781] dark:text-[rgba(255,255,255,0.5)]">{message.time}</ChatTime>
                    <span className="mb-0.5">
                      <DeliveredIcon />
                    </span>
                  </ChatMessageTailOut>
                ) : (
                  <ChatMessageTailIn
                    className={`relative z-[99] flex max-w-max items-end rounded-b-lg rounded-tr-lg bg-[#fff] py-1 px-1.5 dark:bg-[#202c33]`}
                    borderWidth={!messages[message.id - 1].isMe ? 0 : 9}
                    tailInColor={theme === "dark" ? "#202c33" : "#d9fdd3"}
                  >
                    <span className="w-full max-w-[200px] sm:max-w-[400px] lg:max-w-[500px]">{message.content}</span>
                    <ChatTime className="text-[#667781] dark:text-[rgba(255,255,255,0.5)]">{message.time}</ChatTime>
                  </ChatMessageTailIn>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div ref={chatEndRef}></div>
      </div>
      {/* chat footer */}
      <div className="relative z-[99] flex h-16 bg-[#f0f2f5] py-2 px-3 dark:bg-[#202c33] md:px-6">
        {/* Chat text box */}
        <div className="basis-[90%] px-3 py-1">
          <input
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
  );
};

export default ChatWindow;

const ChatBG = styled.div`
  object-fit: cover;
  background-size: cover;
  background-position: top;
  background-repeat: repeat-y;
`;

const ChatFooter = styled.div``;

const ChatMessageTailOut = styled("div")<{ borderWidth: number; tailOutColor: string }>`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: -6px;
    width: 6px;
    height: 13px;
    border-bottom: 11px solid transparent;
    border-left: ${(props) => props.borderWidth}px solid ${(props) => props.tailOutColor};
  }
`;

const ChatMessageTailIn = styled("div")<{ borderWidth: number; tailInColor: string }>`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -6px;
    width: 6px;
    height: 13px;
    border-bottom: 11px solid transparent;
    border-right: ${(props) => props.borderWidth} px solid ${(props) => props.tailInColor};
  }
`;

const ChatTime = styled("span")`
  font-size: 0.6rem;
  margin: 0 0.25rem;
  user-select: none;
`;
