import React from "react";
import Layout from "@/components/layout";
import TerminalWindow from "@/components/TerminalWindow";
import { motion } from "framer-motion";

const CVPage: React.FC = () => {
  return (
    <Layout meta={{ title: "CV // ENGINEER_CLI_v2" }} showEffects={false}>
      <div className="space-y-6 h-[85vh] flex flex-col">
        <header className="space-y-2 shrink-0">
          <div className="text-[10px] text-terminal-green/50 font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-terminal-green/30 animate-pulse" />
            root / credentials / HuyTran_CV2.pdf
          </div>
          <div className="flex justify-between items-end">
            <h1 className="text-3xl font-bold tracking-tighter text-terminal-green uppercase">PERSONNEL_DOSSIER</h1>
            <a 
              href="/HuyTran_CV2.pdf" 
              download
              className="text-[10px] bg-terminal-green/10 text-terminal-green border border-terminal-green/30 px-3 py-1 hover:bg-terminal-green hover:text-black transition-all font-bold uppercase"
            >
              DOWNLOAD_HARD_COPY
            </a>
          </div>
        </header>

        <TerminalWindow 
          title="document_viewer --source=HuyTran_CV2.pdf" 
          className="flex-grow min-h-0 h-full flex flex-col relative"
          bodyClassName="flex-grow flex flex-col p-0 overflow-hidden relative"
        >
          {/* Elevate z-index to sit ABOVE the global Layout scanlines (z-100) */}
          <div className="flex-grow w-full relative z-[110] bg-white">
             <iframe 
                src="/HuyTran_CV2.pdf#view=FitH" 
                className="w-full h-full border-0"
                title="CV Document Viewer"
             />
          </div>
        </TerminalWindow>

        <footer className="text-center shrink-0">
           <div className="inline-block px-4 py-1 border border-dashed border-terminal-border text-[10px] text-terminal-green/30 uppercase font-mono">
              [ SECURITY_CLEARANCE_VERIFIED ] // [ PREDICATED_DECRYPTION_COMPLETE ]
           </div>
        </footer>
      </div>
    </Layout>
  );
};

export default CVPage;
