/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import { useInView } from "framer-motion";
import useMediaQuery from "@/lib/hooks/use-media-query";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

interface IChatWindow {}

export interface IChatMessage {
  id: number;
  content: string;
  isMe: boolean;
  time?: string;
}

const ChatWindow: React.FC<IChatWindow> = ({}) => {
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<IChatMessage[]>([]);
  const [isTyping, setIsTyping] = React.useState<boolean>(false);
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [isSendEmailButton, setIsSendEmailButton] = React.useState<boolean>(false);

  const chatEndRef = React.useRef<HTMLDivElement>(null);
  const chatBodyRef = React.useRef<HTMLDivElement>(null);
  const chatInputRef = React.useRef<HTMLInputElement>(null);

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
      replyBack(["Hello stranger, my name is Huy", "What is your name?"]);
    }
  }, [isInView, messages]);

  React.useEffect(() => {
    if (isChatInputInView) {
      chatInputRef.current?.focus();
    }
  }, [isChatInputInView]);

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
      replyBack([`You can still write more messages, when you are done, press SEND EMAIL button`], true);
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
    <div className="relative h-min w-full max-w-[600px] overflow-hidden rounded-xl shadow-xl dark:shadow-none">
      {/* Chat background */}
      <ChatBG className="absolute top-0 left-0 h-full w-full bg-[url('/chat-bg.png')] opacity-[0.8] dark:opacity-[0.1]" />
      {/* chat header */}
      <ChatHeader />
      {/* chat body */}
      <ChatBody
        isTyping={isTyping}
        chatBodyRef={chatBodyRef}
        messages={messages}
        isSendEmailButton={isSendEmailButton}
        handleEmailButtonClick={handleEmailButtonClick}
        chatEndRef={chatEndRef}
      />
      {/* chat footer */}
      <ChatFooter
        handleKeyDown={handleKeyDown}
        handleSendMessage={handleSendMessage}
        chatInputRef={chatInputRef}
        isTyping={false}
        message={message}
        setMessage={setMessage}
      />
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
