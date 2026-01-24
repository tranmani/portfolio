import React from "react";
import cx from "classnames";

interface AsciiTextProps {
  text: string;
  className?: string;
}

/**
 * A component that renders text with a selectable block/ASCII aesthetic.
 * It uses a heavy monospace font stack and specific styling to mimic the user's reference image.
 */
const AsciiText: React.FC<AsciiTextProps> = ({ text, className }) => {
  return (
    <div className={cx("ascii-text-container select-text max-w-full overflow-hidden", className)}>
      <pre className="font-mono text-[min(1.2vw,8px)] md:text-[min(1vw,10px)] lg:text-[10px] leading-[1.1] tracking-normal whitespace-pre text-terminal-green/90 filter drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">
        {text}
      </pre>
      
      <style jsx>{`
        .ascii-text-container pre {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }

        /* Custom selection style to match the user screenshot */
        pre::selection {
          background-color: rgba(0, 50, 255, 0.9);
          color: white;
          text-shadow: none;
        }
      `}</style>
    </div>
  );
};

export default AsciiText;
