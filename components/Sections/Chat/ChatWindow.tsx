import SendButton from "@/components/shared/icons/SendButton";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import TailIn from "@/components/shared/icons/TailIn";
import TailOut from "@/components/shared/icons/TailOut";
import DeliveredIcon from "@/components/shared/icons/DeliveredIcon";

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
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<IChatMessage[]>(messagesRaw);
  const chatBodyRef = React.useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    scroll();
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
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

  const checkIfLastMessageIsMe = (index: number) => {
    if (messages[index - 1].isMe) {
      console.log(messages[index - 1].isMe);

      return true;
    } else return false;
  };

  return (
    <div className="h-min w-full max-w-[600px] overflow-hidden rounded-xl bg-[#202c33]">
      {/* chat header */}
      <div className="flex h-14 justify-between py-2 px-4">
        <div className="flex items-center">
          <Image src={"/logo.webp"} width={40} height={40} className="rounded-full" alt="Huy Tran's picture" priority />{" "}
          <span className="ml-4 font-[500]">Huy Tran</span>
        </div>
        <div></div>
      </div>
      {/* chat body */}
      <ChatBody className="scrollbar-hide h-[300px] overflow-y-scroll overscroll-contain bg-[#182229] px-6 py-2">
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
                    className={`relative flex max-w-max items-end rounded-b-lg rounded-tl-lg bg-[#005c4b] py-1 px-1.5`}
                    borderWidth={checkIfLastMessageIsMe(message.id) ? 0 : 9}
                  >
                    <span>{message.content}</span>
                    <ChatTime>{message.time}</ChatTime>
                    <span>
                      <DeliveredIcon />
                    </span>
                  </ChatMessageTailOut>
                ) : (
                  <ChatMessageTailIn
                    className={`relative flex max-w-max items-end rounded-b-lg rounded-tr-lg bg-[#202c33] py-1 px-1.5`}
                    borderWidth={checkIfLastMessageIsMe(message.id) ? 0 : 9}
                  >
                    {message.content}
                    <ChatTime>{message.time}</ChatTime>
                  </ChatMessageTailIn>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div ref={chatBodyRef}></div>
      </ChatBody>
      {/* chat footer */}
      <div className="flex h-16 bg-[#202c33] py-2 px-3 md:px-6">
        {/* Chat text box */}
        <div className="basis-[90%] px-3 py-1">
          <input
            onKeyDown={handleKeyDown}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-full w-full rounded-md border-[#2a3942] border-transparent bg-[#2a3942] focus:border-transparent focus:ring-0"
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

const ChatBody = styled.div`
  background-image: url("/chat-bg.png");
  object-fit: cover;
  background-size: cover;
  background-position: top;
`;

const ChatFooter = styled.div``;

const ChatMessageTailOut = styled("div")<{ borderWidth: number }>`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: -6px;
    width: 6px;
    height: 13px;
    border-bottom: 11px solid transparent;
    border-left: ${(props) => props.borderWidth}px solid #005c4b;
  }
`;

const ChatMessageTailIn = styled("div")<{ borderWidth: number }>`
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -6px;
    width: 6px;
    height: 13px;
    border-bottom: 11px solid transparent;
    border-right: ${(props) => props.borderWidth} px solid #202c33;
  }
`;

const ChatTime = styled("span")`
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0.25rem;
`;
