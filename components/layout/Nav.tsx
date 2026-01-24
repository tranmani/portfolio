import Link from "next/link";
import { useRouter } from "next/router";
import { portfolioConfig } from "@/lib/config";
import Image from "next/image";
import cx from "classnames";

const Nav: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-terminal-border">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 bg-terminal-green rotate-45 group-hover:scale-110 transition-transform" />
          <span className="font-bold tracking-tighter text-lg uppercase hidden sm:inline-block">
            ENGINEER_CLI_v2
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        {portfolioConfig.navigation.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cx(
                "px-3 py-1 transition-all duration-300 relative group",
                isActive 
                  ? "text-white bg-terminal-green/10 border-b border-terminal-green shadow-[0_0_15px_rgba(19,236,91,0.15)]" 
                  : "text-terminal-green hover:text-white"
              )}
            >
              {isActive && (
                <span className="text-[10px] mr-1 animate-pulse">{">"}</span>
              )}
              {item.label}
            </Link>
          );
        })}
        
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
