import React from "react";

interface CommandLineProps {
  command: string;
}

const CommandLine: React.FC<CommandLineProps> = ({ command }) => {
  return (
    <div className="flex gap-2 mb-4 font-mono text-terminal-green">
      <span className="opacity-70">$</span>
      <span>{command}</span>
    </div>
  );
};

export default CommandLine;
