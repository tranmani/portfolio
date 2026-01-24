import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import CommandLine from "@/components/CommandLine";
import { portfolioConfig } from "@/lib/config";

const Projects: React.FC = () => {
  return (
    <Layout meta={{ title: "Projects // ENGINEER_CLI_v2" }}>
      <div className="space-y-8">
        <div className="text-[10px] text-terminal-green/50 font-mono mb-4">
          guest@engineer-node:~$ ls -la ./projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioConfig.projects.map((project, idx) => (
            <TerminalWindow 
              key={project.title} 
              title={`project_0${idx + 1}.json`}
              className="hover:border-terminal-green transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-terminal-green">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] bg-terminal-green text-background px-2 py-0.5 font-bold uppercase hover:bg-white transition-colors"
                  >
                    Open_Link
                  </a>
                </div>
                
                <p className="text-sm text-terminal-green/70 italic leading-relaxed">
                  &quot;{project.description}&quot;
                </p>

                <div className="pt-4 border-t border-terminal-border/30 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] border border-terminal-border px-1.5 py-0.5 text-terminal-green/50 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Fake hex dump look on hover */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-center justify-center pointer-events-none">
                <div className="font-mono text-[8px] text-terminal-green/20 break-all leading-tight">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span key={i}>{Math.random().toString(16).substring(2, 10)} </span>
                  ))}
                  <div className="text-center mt-4 text-[12px] text-terminal-green font-bold opacity-100">
                     VIEW_DETAILS_PENDING...
                  </div>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* Global Projects Command */}
        <TerminalWindow title="system_logs" className="opacity-50">
           <div className="text-xs font-mono">
              [SYSTEM] Found {portfolioConfig.projects.length} archived projects in /var/www/portfolio/data/projects.db
              <br />
              [SYSTEM] All endpoints verified. SSL handshakes successful.
           </div>
        </TerminalWindow>
      </div>
    </Layout>
  );
};

export default Projects;
