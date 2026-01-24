import React from "react";
import cx from "classnames";

interface StatBoxProps {
  label: string;
  value: string;
  unit?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value, unit, icon, children, className }) => {
  return (
    <div className={cx(
      "group relative border border-terminal-border p-5 bg-black/40 transition-all duration-300",
      "hover:border-terminal-green hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]",
      className
    )}>
      {/* Label */}
      <div className="text-[10px] uppercase text-terminal-green/40 mb-2 font-bold tracking-widest group-hover:text-terminal-green/60 transition-colors">
        {label}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-1 relative z-10">
        <div className="flex items-baseline gap-2">
          <div className="text-3xl font-bold text-terminal-green/90 group-hover:text-terminal-green transition-all duration-300 relative">
            {value}
            
            {/* Hover Scanline/Grid Effect layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden mix-blend-overlay">
              <div className="absolute inset-0 stat-grid-pattern h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent h-1/2 w-full animate-scan" style={{ animationDuration: '4s' }} />
            </div>
          </div>
          {unit && (
            <div className="text-sm font-bold text-terminal-green/40 group-hover:text-terminal-green/60 transition-colors">
              {unit}
            </div>
          )}
        </div>
        {children && <div className="mt-2 group-hover:brightness-125 transition-all">{children}</div>}
      </div>

      {/* Icon */}
      <div className="absolute top-4 right-4 text-terminal-green/20 group-hover:text-terminal-green/80 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(0,255,65,0.5)] transition-all duration-500">
        {icon}
      </div>

      {/* Bottom decorative corner border (only on hover) */}
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default StatBox;
