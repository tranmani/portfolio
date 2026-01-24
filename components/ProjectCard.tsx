import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import cx from "classnames";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    link: string;
    tags: string[];
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate tactical metadata
  const projectId = (project.title.length * 777).toString(16).toUpperCase().padStart(4, '0');
  const sessionKey = Math.random().toString(16).slice(2, 8).toUpperCase();

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <TerminalWindow 
        title={`project_node_0${index + 1}.json`}
        className={cx(
          "transition-all duration-300 group overflow-hidden relative",
          isHovered ? "border-terminal-green shadow-[0_0_20px_rgba(19,236,91,0.1)]" : "border-terminal-border"
        )}
      >
        <div className="space-y-4 relative z-10">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className={cx(
                "text-xl font-bold transition-all duration-200",
                isHovered ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "text-terminal-green"
              )}>
                {isHovered && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1] }}
                    className="mr-2 text-terminal-green animate-pulse"
                  >
                    {">"}
                  </motion.span>
                )}
                {project.title}
              </h3>
              <div className="text-[10px] text-terminal-green/30 font-mono flex gap-2">
                <span>ID: 0x{projectId}</span>
                <span className="opacity-50">// STATUS: </span>
                <span className={cx(isHovered ? "text-terminal-green" : "")}>NOMINAL</span>
              </div>
            </div>
            
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cx(
                "text-[10px] px-3 py-1 font-bold uppercase transition-colors",
                isHovered ? "bg-terminal-green text-black" : "bg-terminal-green/10 text-terminal-green border border-terminal-green/30"
              )}
            >
              Access_Node
            </motion.a>
          </div>
          
          <p className="text-sm text-terminal-green/70 leading-relaxed border-l border-terminal-border/40 pl-4 py-1 italic">
            &quot;{project.description}&quot;
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className={cx(
                  "text-[9px] border px-2 py-0.5 uppercase transition-all duration-300",
                  isHovered ? "border-terminal-green text-terminal-green bg-terminal-green/5" : "border-terminal-border/40 text-terminal-green/40"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tactical HUD Overlay (Bottom) */}
          <div className="pt-4 flex justify-between items-end border-t border-terminal-border/20">
            <div className="flex gap-1">
               {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={isHovered ? {
                      opacity: [0.2, 1, 0.2],
                    } : { opacity: 0.2 }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                    className="w-1 h-3 bg-terminal-green" 
                  />
               ))}
            </div>
            <div className="text-[8px] text-terminal-green/20 font-mono text-right leading-tight uppercase">
              session_key: {sessionKey}<br />
              encryption: aes_256
            </div>
          </div>
        </div>

        {/* Global Scanning Line */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-terminal-green/20 shadow-[0_0_10px_rgba(19,236,91,0.5)] z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Background Glitch Trace */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            >
              <div className="font-mono text-[6px] text-terminal-green break-all leading-none p-2">
                {Array.from({ length: 40 }).map((_, i) => (
                  <span key={i}>{Math.random().toString(16)}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </TerminalWindow>
    </motion.div>
  );
};

export default ProjectCard;
