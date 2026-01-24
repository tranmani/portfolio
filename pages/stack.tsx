import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import { portfolioConfig } from "@/lib/config";

const Stack: React.FC = () => {
  return (
    <Layout meta={{ title: "Stack // ENGINEER_CLI_v2" }}>
      <div className="space-y-8">
        <div className="text-[10px] text-terminal-green/50 font-mono mb-4">
          guest@engineer-node:~$ systemctl status tech-stack.service
        </div>

        <TerminalWindow title="tech-stack.service — active (running)">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
             {["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "AWS", "Kubernetes", "Docker", "PostgreSQL", "MUI", "Framer Motion", "MongoDB"].map((tech) => (
               <div key={tech} className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 border border-terminal-border flex items-center justify-center text-2xl group-hover:bg-terminal-green group-hover:text-background transition-all group-hover:scale-110">
                     {tech[0]}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-terminal-green/60 group-hover:text-terminal-green">
                    {tech}
                  </span>
               </div>
             ))}
          </div>
          
          <div className="mt-12 border-t border-terminal-border pt-8">
             <div className="text-[10px] text-terminal-green/30 uppercase mb-4">Performance_Metrics</div>
             <div className="space-y-4">
                {[
                  { label: "Frontend Architecture", value: 95 },
                  { label: "Cloud Infrastructure", value: 88 },
                  { label: "Database Management", value: 82 },
                  { label: "System Security", value: 90 },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>
                    <div className="h-1 bg-terminal-green-faint">
                      <div 
                        className="h-full bg-terminal-green shadow-[0_0_5px_rgba(0,255,65,0.5)]" 
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
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
