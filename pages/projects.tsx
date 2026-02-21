import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import { portfolioConfig } from "@/lib/config";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useGamification } from "@/lib/context/GamificationContext";


const Projects: React.FC = () => {
  const { level } = useGamification();
  
  return (
    <Layout meta={{ title: "Projects // ENGINEER_CLI_v2" }}>
      <div className="space-y-8">
        <div className="text-[10px] text-terminal-green/50 font-mono mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-terminal-green animate-pulse rounded-full" />
          {level}@engineer-node:~$ ls -la ./manifest/projects --view=tactical
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioConfig.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Global Projects Command */}
        <TerminalWindow title="system_orchestrator — logs" className="opacity-80">
           <div className="text-[10px] font-mono space-y-1">
              <div className="flex gap-2 text-terminal-green/60 items-center">
                <span className="text-terminal-green">[OK]</span>
                <span>Initialized project_buffer: 0x8A2C ... SUCCESS</span>
              </div>
              <div className="flex gap-2 text-terminal-green/40 items-center pl-4">
                <span>Found {portfolioConfig.projects.length} artifacts in local repository</span>
              </div>
              <div className="flex gap-2 text-terminal-green/40 items-center pl-4">
                <span>Allocating memory for UI_manifest ... OK</span>
              </div>
              <div className="flex gap-2 text-terminal-green/60 items-center">
                <span className="text-terminal-green">[READY]</span>
                <span>Standby for user interaction trigger...</span>
              </div>
           </div>
        </TerminalWindow>
      </div>
    </Layout>
  );
};

export default Projects;
