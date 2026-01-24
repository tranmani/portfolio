import React from "react";
import Link from "next/link";
import cx from "classnames";

interface QuickActionProps {
  label: string;
  path: string;
  className?: string;
}

const QuickAction: React.FC<QuickActionProps> = ({ label, path, className }) => {
  return (
    <Link
      href={path}
      className={cx(
        "px-4 py-2 border border-terminal-border bg-terminal-green-faint text-terminal-green text-sm hover:bg-terminal-green hover:text-background transition-all rounded-sm",
        className
      )}
    >
      {label}
    </Link>
  );
};

export default QuickAction;
