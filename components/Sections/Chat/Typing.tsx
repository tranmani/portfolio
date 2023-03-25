import { ThemeContext } from "@/lib/hooks/use-dark-mode";
import React from "react";

const Typing: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="typing bg-[#fff] dark:bg-[#202c33]">
      <div className="typing__dot"></div>
      <div className="typing__dot"></div>
      <div className="typing__dot"></div>
    </div>
  );
};

export default Typing;
