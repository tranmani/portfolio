import React from "react";
import Link from "next/link";
import { portfolioConfig } from "@/lib/config";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-terminal-border">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-terminal-green rotate-45" />
        <span className="font-bold tracking-tighter text-lg uppercase hidden sm:inline-block">
          ENGINEER_CLI_v2
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium">
        {portfolioConfig.navigation.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="text-terminal-green hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
        
        <Link
          href="/cv"
          className="bg-terminal-green text-background px-3 py-1 font-bold rounded-sm hover:bg-white transition-colors text-xs"
        >
          DOWNLOAD_CV
        </Link>
        
        <div className="w-8 h-8 rounded-full overflow-hidden border border-terminal-border">
          <Image 
            src="/face.png" 
            alt="Avatar" 
            width={32} 
            height={32} 
            className="grayscale hover:grayscale-0 transition-all object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
