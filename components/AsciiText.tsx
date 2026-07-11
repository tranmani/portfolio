import React from "react";
import cx from "classnames";

interface AsciiTextProps {
  text: string;
  /** The real, readable name. The ASCII block is decorative and hidden from assistive tech. */
  label: string;
  className?: string;
}

const AsciiText: React.FC<AsciiTextProps> = ({ text, label, className }) => {
  return (
    <h1 className={cx("ascii-text-container select-text max-w-full overflow-hidden", className)}>
      <span className="sr-only">{label}</span>
      <pre
        aria-hidden="true"
        className="font-mono text-[min(1.2vw,8px)] md:text-[min(1vw,10px)] lg:text-[10px] leading-[1.1] tracking-normal whitespace-pre text-terminal-green/90 filter drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]"
      >
        {text}
      </pre>
    </h1>
  );
};

export default AsciiText;
