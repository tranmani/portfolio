import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import { motion, AnimatePresence } from "framer-motion";
import TechCard from "@/components/TechCard";
import { portfolioConfig } from "@/lib/config";
import { useGamification } from "@/lib/context/GamificationContext";


const TelemetryItem: React.FC<{ metric: any }> = ({ metric }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const randomDurations = React.useMemo(() => {
    if (!mounted) return [...Array(10)].map(() => 2);
    return [...Array(10)].map(() => 2 + Math.random() * 2);
  }, [mounted]);
  
  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 5 }}
      className="group"
    >
      <div className="flex justify-between text-[10px] mb-2 font-bold group-hover:text-terminal-green transition-colors">
        <span className="flex items-center gap-2">
          <span className="opacity-40 group-hover:opacity-100">{metric.icon}</span>
          {metric.label} <span className="text-terminal-green/20 text-[8px] font-normal">[{metric.id}]</span>
        </span>
        <span className="text-[9px] tracking-tighter text-terminal-green/80">{metric.status}</span>
      </div>
      <div className="flex gap-1.5 items-center mt-2">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.3, 0.8, 0.4, 1, 0.3],
              scale: [1, 1.05, 1] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: randomDurations[i],
              delay: i * 0.15
            }}
            className="w-3 h-3 border border-terminal-green/30 bg-terminal-green/40 shadow-[0_0_2px_rgba(19,236,91,0.2)]"
          />
        ))}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="ml-2 text-[8px] text-terminal-green/40 font-mono"
            >
              BIT_FEED_0x{metric.id.slice(-2)} // ACTIVE
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Stack: React.FC = () => {
  const { level } = useGamification();

  return (
    <Layout meta={{ title: "Stack // ENGINEER_CLI_v2" }}>
      <div className="space-y-8">
        <div className="text-[10px] text-terminal-green/50 font-mono mb-4">
          {level}@engineer-node:~$ systemctl status tech-stack.service --all
        </div>

        <TerminalWindow title="tech-stack.service — active (running)">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 py-12"
          >
             {portfolioConfig.stackData.map((tech, index) => (
               <motion.div
                 key={tech.name}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.05 }}
               >
                 <TechCard name={tech.name} category={tech.category} />
               </motion.div>
             ))}
          </motion.div>
          
          <div className="mt-12 border-t border-terminal-border pt-8">
             <div className="text-[10px] text-terminal-green/30 uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 bg-terminal-green animate-pulse rounded-full" />
                System_Telemetry // REALTIME_DIAGNOSTICS
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  { label: "Frontend Architecture", status: "OPTIMIZED", id: "0xFEA1", icon: "⚡" },
                  { label: "Cloud Infrastructure", status: "AVAILABLE", id: "0xCLD4", icon: "☁️" },
                  { label: "Database Management", status: "SYNCHRONIZED", id: "0xDBM2", icon: "🗄️" },
                  { label: "System Security", status: "NOMINAL", id: "0xSEC9", icon: "🛡️" },
                ].map((metric) => (
                  <TelemetryItem key={metric.label} metric={metric} />
                ))}
             </div>
          </div>
        </TerminalWindow>

        <div className="flex justify-center">
            <div className="text-[10px] text-terminal-green/20 animate-pulse">
                SCANNING SYSTEM RESOURCES... [OK]
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stack;
