import React from "react";
import Image from "next/image";

interface IChatHeader {}

const ChatHeader: React.FC<IChatHeader> = ({}) => {
  return (
    <div className="relative z-[99] flex h-14 select-none justify-between bg-[#f0f2f5] py-2 px-4 dark:bg-[#202c33]">
      <div className="flex items-center">
        <Image src={"/logo.webp"} width={40} height={40} className="rounded-full" alt="Huy Tran's picture" priority />{" "}
        <span className="ml-4 font-[500]">Huy Tran</span>
      </div>
      <div></div>
    </div>
  );
};

export default ChatHeader;
