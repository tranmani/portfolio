import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import DotMap from "@/components/DotMap";
import YamlForm from "@/components/YamlForm";
import cx from "classnames";



const Contact: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 50); // 5 seconds to reach 100%
    } else {
      // Stay at 100% for 5 seconds
      timer = setTimeout(() => {
        setProgress(0);
      }, 5000);
    }

    return () => {
      clearInterval(timer);
      clearTimeout(timer);
    };
  }, [progress]);

  return (
    <Layout meta={{ title: "Contact // ENGINEER_CLI_v2" }}>
      <div className="space-y-8">
        <div className="text-[10px] text-terminal-green/50 font-mono mb-4">
          root / cluster-01 / contact.yaml
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Main Form Terminal */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <TerminalWindow title="contact.yaml" path="root / cluster-01 / contact.yaml" className="flex-grow">
              <YamlForm />
            </TerminalWindow>

            {/* Terminal Output Sample as seen in mock */}
            <TerminalWindow title="terminal — output" className="opacity-80">
              <div className="font-mono text-[10px] space-y-1">
                <div className="flex gap-2">
                  <span className="text-terminal-green">$</span>
                  <span>./deploy_message.sh</span>
                </div>
                <div className="text-terminal-green/60">[INFO] Initiating TLS 1.3 Handshake ...</div>
                <div className="text-terminal-green/60">[INFO] Validating YAML syntax ... OK</div>
                <div className="flex items-center gap-4 text-terminal-green/60">
                   [INFO] Pushing payload: 
                   <div className="flex gap-1 items-center">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i}
                          className={cx(
                            "w-2.5 h-3 border border-terminal-green/20 transition-all duration-300",
                            progress > (i * 8.33) ? "bg-terminal-green/80 shadow-[0_0_5px_rgba(19,236,91,0.5)]" : "bg-transparent"
                          )}
                        />
                      ))}
                   </div>
                   <span className="tabular-nums font-bold text-terminal-green">{progress}%</span>
                </div>
                <div className="text-terminal-green animate-pulse">Waiting for user input trigger...</div>
              </div>
            </TerminalWindow>
          </div>

          {/* Node Map / Sidebar */}
          <div className="lg:col-span-2 flex flex-col">
            <DotMap />
          </div>
        </div>

        {/* Unified Bottom Info Bar */}
        <div className="mt-12 pt-8 border-t border-terminal-border/30">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12">
                {/* Left side Status */}
                <div className="hidden lg:block text-[10px] text-terminal-green/20 uppercase tracking-widest self-center">
                    SYSTEM_LINK_ACTIVE // ENCRYPTION: AES-256-GCM
                </div>

                {/* Right side group */}
                <div className="space-y-6 w-full lg:w-auto">
                    {/* Icons */}
                    <div className="flex justify-center lg:justify-end gap-12 text-terminal-green/40">
                        <button className="hover:text-terminal-green transition-colors text-lg italic">@</button>
                        <button className="hover:text-terminal-green transition-colors text-lg font-bold">⌘</button>
                        <button className="hover:text-terminal-green transition-colors text-lg">◮</button>
                    </div>

                    {/* Status Grids */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center lg:text-right">
                            <div className="text-[8px] text-terminal-green/30 uppercase">Status</div>
                            <div className="text-[10px] font-bold">200 OK</div>
                        </div>
                        <div className="text-center lg:text-right">
                            <div className="text-[8px] text-terminal-green/30 uppercase">Encryption</div>
                            <div className="text-[10px] font-bold">SSL/TLS</div>
                        </div>
                        <div className="text-center lg:text-right">
                            <div className="text-[8px] text-terminal-green/30 uppercase">Source</div>
                            <div className="text-[10px] font-bold">0.0.0.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
