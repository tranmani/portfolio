import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import { portfolioConfig } from "@/lib/config";
import { useGamification } from "@/lib/context/GamificationContext";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const { level } = useGamification();
  // Calculate dynamic uptime based on the first experience start date
  const uptimeHours = React.useMemo(() => {
    const experiences = portfolioConfig.experiences;
    if (!experiences.length) return 0;
    
    // The last item is the oldest experience
    const oldestExp = experiences[experiences.length - 1];
    const startDateStr = oldestExp.date.split("-")[0].trim(); // e.g., "Feb 2021"
    
    const startDate = new Date(startDateStr);
    const now = new Date();
    
    const diffMs = now.getTime() - startDate.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60));
  }, []);

  return (
    <Layout meta={{ title: "Experience // ENGINEER_CLI_v2" }}>
      <div className="space-y-12 max-w-4xl mx-auto">
        <header className="space-y-2">
          <div className="text-[10px] text-terminal-green/50 font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-terminal-green/30 animate-pulse" />
            {level} / cluster-01 / logs / service_history.log
          </div>
          <h1 className="text-3xl font-bold tracking-tighter text-terminal-green">SERVICE_RECORDS</h1>
          <p className="text-xs text-terminal-green/60 font-mono">
            System uptime: {uptimeHours.toLocaleString()}+ hours // Total nodes deployed: {portfolioConfig.experiences.length}
          </p>
        </header>

        <div className="relative border-l border-terminal-border ml-4 pl-8 space-y-12">
          {portfolioConfig.experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border border-terminal-green bg-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-terminal-green animate-pulse" />
              </div>

              <TerminalWindow 
                title={`service_node — ${exp.company.toLowerCase().replace(/\s/g, '_')}.conf`}
                className="group hover:border-terminal-green transition-colors"
              >
                <div className="space-y-4 font-mono">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-terminal-green flex items-center gap-2">
                        {exp.title}
                        {exp.active ? (
                          <span className="text-[10px] bg-terminal-green/10 text-terminal-green px-1 border border-terminal-green/30 rounded-sm font-normal animate-pulse">
                            ACTIVE
                          </span>
                        ) : (
                          <span className="text-[10px] bg-white/5 text-white/40 px-1 border border-white/10 rounded-sm font-normal">
                            ARCHIVED
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-white/80">{exp.company} // {exp.place}</p>
                    </div>
                    <div className="text-[10px] text-terminal-green/40 text-right font-bold uppercase tracking-widest whitespace-nowrap">
                       Timestamp: [ RECORD_{100 - index * 10} ]
                    </div>
                  </div>

                  <div className="text-xs text-terminal-green/70 leading-relaxed border-l-2 border-terminal-border/30 pl-4">
                    {exp.description}
                  </div>

                  {/* Tactical Decorations */}
                  <div className="pt-4 flex flex-wrap gap-4 border-t border-terminal-border/20">
                     <div className="space-y-1">
                        <div className="text-[8px] text-terminal-green/30 uppercase">Uptime_Status</div>
                        <div className="text-[10px] text-terminal-green font-bold">100% NOMINAL</div>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[8px] text-terminal-green/30 uppercase">Deployment_Root</div>
                        <div className="text-[10px] text-terminal-green/60">{exp.place.split(',')[0]} (DC-01)</div>
                     </div>
                     <div className="grow" />
                     <div className="self-end flex gap-1">
                        {[...Array(5)].map((_, i) => (
                           <div key={i} className={`w-1 h-3 border ${i < (5 - index) ? 'bg-terminal-green/40 border-terminal-green/20' : 'border-terminal-border/20'}`} />
                        ))}
                     </div>
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* Closing Status */}
        <footer className="pt-8 text-center">
           <div className="inline-block px-4 py-1 border border-dashed border-terminal-border text-[10px] text-terminal-green/30 hover:border-terminal-green hover:text-terminal-green transition-colors cursor-help">
              EOF // END_OF_SERVICE_HISTORY // CHECKSUM: 0x8A7C2B
           </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Experience;
