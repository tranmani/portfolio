import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import React from "react";

interface TechnologyChip {
  color: string;
  technology: string;
}

const TechnologyChip: React.FC<TechnologyChip> = ({ color, technology }) => {
  const { theme } = React.useContext(ThemeContext);

  const backgroundColor = () => {
    switch (theme) {
      case "dark":
        return color === "black" ? "black" : color;
      case "light":
        return color === "white" ? "black" : color;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`}
          style={{ backgroundColor: backgroundColor() }}
        ></span>
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full`}
          style={{ backgroundColor: backgroundColor() }}
        ></span>
      </span>
      <p className="text-sm">{technology}</p>
    </div>
  );
};

export default TechnologyChip;
