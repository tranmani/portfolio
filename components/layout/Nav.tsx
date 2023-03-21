import useDarkMode from "@/lib/hooks/use-dark-mode";
import useScroll from "@/lib/hooks/use-scroll";
import useWindowSize from "@/lib/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Nav = () => {
  const { windowSize } = useWindowSize();
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = "light";
    localStorage.theme = "dark";
    localStorage.removeItem("theme");
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[100] flex h-[120px] w-full items-center justify-center transition-all ease-[cubic-bezier(0,0,0.2,1)] ${
        useScroll(50) && "!h-[60px] bg-[rgba(105,90,166,0.1)]"
      } ${useScroll((windowSize.height || 1100) / 1.5) && "bg-[rgba(105,90,166,0.35)]"} ${
        useScroll((windowSize.height || 1900) / 1.5) && "bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)]"
      }`}>
      <div className={`flex h-full w-full items-center justify-center ${useScroll(50) && "backdrop-blur-sm"}`}>
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
      </div>

      <button onClick={() => toggleTheme()}>Theme</button>
      <div>{theme}</div>
    </div>
  );
};

export default Nav;
