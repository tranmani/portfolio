import React, { ReactNode } from "react";
import cx from "classnames";

interface TerminalWindowProps {
  title: string;
  path?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title,
  path,
  children,
  className,
  bodyClassName,
}) => {
  return (
    <div className={cx("terminal-window w-full", className)}>
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-terminal-green/70 tabular-nums">{title}</span>
        </div>
        {path && <div className="text-terminal-green/50 hidden sm:block">{path}</div>}
      </div>
      <div className={cx("terminal-body", bodyClassName)}>
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
