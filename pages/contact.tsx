import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import DotMap from "@/components/DotMap";
import YamlForm from "@/components/YamlForm";

const Contact: React.FC = () => {
  return (
    <Layout meta={{ title: "Contact // ENGINEER_CLI_v2" }}>
      <div className="space-y-8">
        <div className="text-[10px] text-terminal-green/50 font-mono mb-4">
          root / cluster-01 / contact.yaml
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Form Terminal */}
          <div className="lg:col-span-3 space-y-8">
            <TerminalWindow title="contact.yaml" path="root / cluster-01 / contact.yaml">
              <YamlForm />
            </TerminalWindow>

            {/* Terminal Output Sample as seen in mock */}
            <TerminalWindow title="terminal — output" className="opacity-80">
              <div className="font-mono text-xs space-y-1">
                <div className="flex gap-2">
                  <span className="text-terminal-green">$</span>
                  <span>./deploy_message.sh</span>
                </div>
                <div className="text-terminal-green/60">[INFO] Initiating TLS 1.3 Handshake ...</div>
                <div className="text-terminal-green/60">[INFO] Validating YAML syntax ... OK</div>
                <div className="flex items-center gap-4 text-terminal-green/60">
                   [INFO] Pushing payload: 
                   <div className="w-48 h-1 bg-terminal-green-faint relative">
                      <div className="absolute inset-0 bg-terminal-green w-[67%]" />
                   </div>
                   <span className="text-[10px]">67%</span>
                </div>
                <div className="text-terminal-green animate-pulse">Waiting for user input trigger...</div>
              </div>
            </TerminalWindow>
          </div>

          {/* Node Map / Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <DotMap />
            
            {/* Social Links / Footer Icons as seen in mock */}
            <div className="flex justify-center gap-8 py-4 border border-terminal-border bg-black/40 rounded-sm">
                <button className="text-terminal-green/60 hover:text-terminal-green transition-colors text-xl">@</button>
                <button className="text-terminal-green/60 hover:text-terminal-green transition-colors text-xl">⌘</button>
                <button className="text-terminal-green/60 hover:text-terminal-green transition-colors text-xl">◮</button>
            </div>

            {/* Status indicators */}
            <div className="grid grid-cols-3 gap-2">
                <div className="border border-terminal-border p-2 text-center">
                    <div className="text-[8px] text-terminal-green/30">200 OK</div>
                    <div className="text-[10px] font-bold">ENDPOINT STATUS</div>
                </div>
                <div className="border border-terminal-border p-2 text-center">
                    <div className="text-[8px] text-terminal-green/30">SSL/TLS</div>
                    <div className="text-[10px] font-bold">SECURE</div>
                </div>
                <div className="border border-terminal-border p-2 text-center">
                    <div className="text-[8px] text-terminal-green/30">0.0.0.0</div>
                    <div className="text-[10px] font-bold">SHIELD</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
