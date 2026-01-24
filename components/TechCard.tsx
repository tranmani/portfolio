import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cx from "classnames";

interface TechCardProps {
  name: string;
  category?: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Generate some "fake" metadata for the HUD look
  const hexId = (name.length * 1234).toString(16).toUpperCase().padStart(4, '0');
  
  const bitReadout = React.useMemo(() => {
    if (!mounted) return "0x00000000";
    return `0x${Math.random().toString(16).slice(2, 10).toUpperCase()}`;
  }, [mounted]);

  // Stable random durations to prevent hydration issues in motion props
  const randomDurations = React.useMemo(() => {
    if (!mounted) return [1, 1, 1, 1, 1];
    return [0, 1, 2, 3, 4].map(() => 0.5 + Math.random() * 0.5);
  }, [mounted]);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex flex-col items-center gap-3 cursor-crosshair group"
      whileHover={{ scale: 1.05 }}
    >
      {/* Background Glow */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -inset-4 bg-terminal-green/5 blur-xl -z-10 rounded-full"
          />
        )}
      </AnimatePresence>

      {/* The Main Box */}
      <div className={cx(
        "w-20 h-20 border transition-all duration-300 flex items-center justify-center relative overflow-hidden",
        isHovered ? "border-terminal-green bg-terminal-green/10" : "border-terminal-border bg-black/40"
      )}>
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* First Letter / Icon */}
        <motion.span 
          animate={isHovered ? { 
            opacity: [1, 0.8, 1, 0.9, 1],
            scale: [1, 1.1, 1.05, 1.1, 1]
          } : { opacity: 1, scale: 1 }}
          transition={isHovered ? { 
            repeat: Infinity, 
            duration: 0.2,
            repeatType: "reverse" 
          } : {}}
          className={cx(
            "text-3xl font-bold transition-all duration-300 select-none",
            isHovered ? "text-terminal-green scale-110 drop-shadow-[0_0_8px_rgba(19,236,91,0.6)]" : "text-terminal-green/40"
          )}
        >
          {name[0].toUpperCase()}
        </motion.span>

        {/* Hover Diagnostic Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 bg-terminal-green/20 text-[6px] font-bold text-terminal-green uppercase text-center py-0.5 backdrop-blur-sm border-t border-terminal-green/30"
            >
              ID_{hexId} // STATUS: OK
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label and Status */}
      <div className="text-center w-full">
        <div className={cx(
          "text-[10px] font-bold uppercase tracking-widest transition-colors h-4 flex items-center justify-center",
          isHovered ? "text-terminal-green" : "text-terminal-green/60"
        )}>
          {name}
        </div>
        
        {/* Animated Status Bits (Only animates on hover) */}
        <div className="h-4 flex items-center justify-center">
          <div className="flex gap-1 mt-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                animate={isHovered ? { 
                  opacity: [0.4, 1, 0.4, 0.8, 0.4],
                  scale: [1, 1.1, 1]
                } : { opacity: 0.4, scale: 1 }}
                transition={isHovered ? { 
                  repeat: Infinity, 
                  duration: randomDurations[i],
                  delay: i * 0.1
                } : {}}
                className="w-1.5 h-1.5 bg-terminal-green/60 shadow-[0_0_3px_rgba(19,236,91,0.5)]"
              />
            ))}
          </div>
        </div>

        {/* Reserved Space for Bit Readout */}
        <div className="h-3 mt-0.5">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[7px] text-terminal-green/60 font-mono tracking-tighter"
              >
                {bitReadout}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reserved Space for Category */}
        <div className="h-4">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[8px] text-terminal-green/40 font-mono"
              >
                {category || "SYSTEM_ACTIVE"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scanning Line (appears on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-terminal-green/30 pointer-events-none z-10"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TechCard;
