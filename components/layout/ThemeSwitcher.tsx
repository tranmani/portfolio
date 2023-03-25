import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import React from "react";
import DarkModeIcon from "../shared/icons/DarkModeIcon";
import LightModeIcon from "../shared/icons/LightModeIcon";

interface IProps {}

const ThemeSwitcher: React.FC<IProps> = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const isDark = React.useMemo(() => theme === "dark", [theme]);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Use Dark Mode"
      className="outline-link flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:bg-[rgba(35,39,47,.08)] active:scale-95 hover:dark:bg-[rgba(241,246,255,0.08)]"
    >
      {!isDark ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeSwitcher;
