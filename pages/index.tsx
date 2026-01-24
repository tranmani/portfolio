import React from "react";
import Layout from "@/components/layout";
import { portfolioConfig } from "@/lib/config";
import TerminalWindow from "@/components/TerminalWindow";
import CommandLine from "@/components/CommandLine";
import QuickAction from "@/components/QuickAction";
import AsciiText from "@/components/AsciiText";
import StatBox from "@/components/StatBox";


const Home: React.FC = () => {
  const { profile, quickActions } = portfolioConfig;

  return (
    <Layout>
      <div className="space-y-8">
        {/* Terminal Header Info */}
        <div className="text-xs text-terminal-green/50 font-mono mb-4">
          guest@engineer-node:~$ ./init_session.sh --verbose
        </div>

        {/* Hero Section Terminal */}
        <TerminalWindow 
          title="init_session.sh — bash — 120x40" 
          className="min-h-[500px]"
        >
          {/* Customizable Selectable Title */}
          <div className="mb-12 mt-2 overflow-hidden flex justify-center lg:justify-start">
            <AsciiText text={profile.asciiTitle || profile.title} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <StatBox 
              label="SENIOR_STATUS" 
              value={profile.yearsXp} 
              unit="Years XP" 
              icon={<span className="text-xl">🛡️</span>}
            />
            
            <StatBox 
              label="ACTIVE_DEPLOYMENTS" 
              value={profile.projectsCount} 
              unit="Major Projs" 
              icon={<span className="text-xl">🕸️</span>}
            />

            <StatBox 
              label="CURRENT_STACK" 
              value={profile.currentStack.length.toString()} 
              unit="Core Techs"
              icon={<span className="text-xl">⚙️</span>}
            >
              <div className="flex gap-2 flex-wrap mt-1">
                {profile.currentStack.map((tech: string) => (
                  <span key={tech} className="px-1.5 py-0.5 bg-terminal-green text-background text-[10px] font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </StatBox>
          </div>

          {/* Profile Summary Section */}
          <div className="mb-12">
            <CommandLine command="cat profile_summary.md" />
            <div className="max-w-2xl text-lg leading-relaxed text-terminal-green/90 italic">
              &quot;{profile.summary}&quot;
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="text-[10px] uppercase text-terminal-green/40 mb-3">QUICK_ACTIONS</div>
            <div className="flex flex-wrap gap-4">
              {quickActions.map((action: any) => (
                <QuickAction key={action.label} label={action.label} path={action.path} />
              ))}
            </div>
          </div>

          {/* Bottom Status Bar (Internal to Terminal) */}
          <div className="mt-20 flex justify-between items-center text-[10px] text-terminal-green/30 uppercase tracking-widest">
            <div className="flex gap-4">
              <span>● CONNECTION_LIVE</span>
              <span>LATENCY: 14ms</span>
            </div>
          </div>
        </TerminalWindow>

        {/* System Info Footer line */}
        <div className="grid grid-cols-3 gap-4 px-2 text-[10px] text-terminal-green/50 uppercase">
          <div>
            <span className="text-terminal-green/20 mr-2">ENVIRONMENT</span>
            PRODUCTION
          </div>
          <div className="text-center">
            <span className="text-terminal-green/20 mr-2">REGION</span>
            EU-WEST-3 (NL)
          </div>
          <div className="text-right">
            <span className="text-terminal-green/20 mr-2">SESSION_ID</span>
            R8F-02X-001
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
