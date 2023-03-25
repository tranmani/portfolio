import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import useScroll from "@/lib/hooks/use-scroll";
import useWindowSize from "@/lib/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface INavProps {}

const Nav: React.FC<INavProps> = () => {
  const { windowSize } = useWindowSize();
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      id="nav"
      className={`fixed top-0 left-0 z-[100] flex h-[120px] w-full items-center justify-center border-[rgba(105,90,166,0.3)] transition-all ease-[cubic-bezier(0,0,0.2,1)] dark:border-[rgba(105,90,166,0.3)] ${
        useScroll(50) && "!h-[60px] border-b-[1px] bg-[rgba(105,90,166,0.1)]"
      } ${useScroll((windowSize.height || 1100) / 1.5) && "bg-[rgba(105,90,166,0.35)]"} ${
        useScroll((windowSize.height || 1900) / 1.5) && "bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)]"
      }`}
    >
      <div className={`flex h-full w-full items-center justify-center ${useScroll(50) && "backdrop-blur-sm"}`}>
        <div className="relative flex w-[85vw] items-center justify-center md:w-[1200px]">
          <Link href="/">
            <Image
              src="/favicon.ico"
              height={32}
              width={32}
              className={`origin-center rotate-[360deg] transition-all ease-[cubic-bezier(0,0,0.2,1)] ${
                useScroll(50) && "rotate-[0deg]"
              }`}
              alt="Huy Tran's picture"
            />
          </Link>
          <div className="absolute right-0">
            <button onClick={toggleTheme}>Theme</button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
