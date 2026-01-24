import React from "react";

const YamlForm: React.FC = () => {
  return (
    <div className="font-mono text-sm space-y-2">
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">1</span>
        <div><span className="text-terminal-green">apiVersion:</span> <span className="text-terminal-green/80">v1</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">2</span>
        <div><span className="text-terminal-green">kind:</span> <span className="text-terminal-green/80">CommunicationRequest</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">3</span>
        <div><span className="text-terminal-green">metadata:</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">4</span>
        <div className="pl-4 flex items-center gap-2">
          <span className="text-terminal-green">name:</span> 
          <input 
            type="text" 
            placeholder="sender-identity"
            className="bg-transparent border border-dashed border-terminal-border px-2 py-0.5 outline-none focus:border-terminal-green transition-colors text-terminal-green/80 w-48"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">5</span>
        <div><span className="text-terminal-green">spec:</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">6</span>
        <div className="pl-4 flex items-center gap-2">
          <span className="text-terminal-green">sender_email:</span> 
          <input 
            type="email" 
            placeholder="you@domain.com"
            className="bg-transparent border border-dashed border-terminal-border px-2 py-0.5 outline-none focus:border-terminal-green transition-colors text-terminal-green/80 w-64"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">7</span>
        <div className="pl-4 flex items-center gap-2">
          <span className="text-terminal-green">subject:</span> 
          <input 
            type="text" 
            placeholder="collaboration_proposal"
            className="bg-transparent border border-dashed border-terminal-border px-2 py-0.5 outline-none focus:border-terminal-green transition-colors text-terminal-green/80 w-64"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">8</span>
        <div className="pl-4 grow">
          <span className="text-terminal-green">message:</span> 
          <div className="mt-2 border border-dashed border-terminal-border p-4 relative min-h-[150px]">
            <textarea 
              placeholder="Enter your message payload here ..."
              className="bg-transparent w-full h-32 outline-none resize-none text-terminal-green/80"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-8 flex justify-between items-center">
        <div className="text-[10px] text-terminal-green/40 uppercase animate-pulse">
           READY_FOR_DEPLOYMENT
        </div>
        <button className="bg-terminal-green text-background px-6 py-2 font-bold flex items-center gap-2 hover:bg-white transition-all uppercase text-xs">
          <span>⚡</span> KUBECTL APPLY -F CONTACT.YAML
        </button>
      </div>
    </div>
  );
};

export default YamlForm;
