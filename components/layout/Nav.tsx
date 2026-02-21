import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { portfolioConfig } from "@/lib/config";
import Image from "next/image";
import cx from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useGamification } from "@/lib/context/GamificationContext";

const Nav: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { level, isMatrixEnabled, toggleMatrix } = useGamification();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[300] flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-terminal-border pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
            <div className="w-5 h-5 bg-terminal-green rotate-45 group-hover:scale-110 transition-transform" />
            <span className="font-bold tracking-tighter text-lg uppercase hidden sm:inline-block">
              {portfolioConfig.profile.projectName}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium pointer-events-auto">
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
          
          {level === 'root' && (
            <button
              onClick={toggleMatrix}
              className={cx(
                "px-2 py-1 border rounded-sm font-mono text-[10px] uppercase transition-all flex items-center gap-2",
                isMatrixEnabled 
                  ? "border-terminal-green text-terminal-green bg-terminal-green/10 shadow-[0_0_10px_rgba(57,255,20,0.2)]"
                  : "border-terminal-green/30 text-terminal-green/50 hover:border-terminal-green/60"
              )}
              title="Toggle Matrix Background"
            >
              <div className={cx(
                "w-1.5 h-1.5 rounded-full",
                isMatrixEnabled ? "bg-terminal-green shadow-[0_0_5px_currentColor] animate-pulse" : "bg-terminal-green/30"
              )} />
              MATRIX
            </button>
          )}

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

        {/* Mobile Burger Toggle */}
        <div className="flex md:hidden items-center gap-4 relative z-[310] pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cx(
              "p-1.5 border rounded-sm transition-all duration-300",
              isMenuOpen ? "text-terminal-green border-terminal-green/40 bg-terminal-green/5" : "text-terminal-green/60 border-terminal-green/20"
            )}
          >
            <div className="w-5 h-4 flex flex-col justify-center items-center relative">
               <motion.div 
                 animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }} 
                 className="h-0.5 w-full bg-current absolute" 
               />
               <motion.div 
                 animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} 
                 className="h-0.5 w-full bg-current absolute" 
               />
               <motion.div 
                 animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }} 
                 className="h-0.5 w-full bg-current absolute" 
               />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[260] md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 sm:w-72 bg-black border-l border-terminal-border z-[270] md:hidden p-8 pt-24 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] h-[100dvh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 relative z-[280]">
                <div className="text-[10px] text-terminal-green/30 uppercase tracking-widest border-b border-terminal-border pb-2 mb-2">
                   System_Navigation
                </div>
                {portfolioConfig.navigation.map((item) => {
                  const isActive = router.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cx(
                        "text-lg font-bold transition-all flex items-center gap-3",
                        isActive ? "text-white" : "text-terminal-green/60 hover:text-terminal-green"
                      )}
                    >
                      <span className={cx(
                        "w-1.5 h-1.5 rotate-45",
                        isActive ? "bg-terminal-green shadow-[0_0_8px_rgba(19,236,91,0.8)]" : "bg-terminal-green/20"
                      )} />
                      {item.label}
                    </Link>
                  );
                })}
                
                <div className="pt-6 border-t border-terminal-border flex flex-col gap-4">
                  {level === 'root' && (
                    <button
                      onClick={toggleMatrix}
                      className={cx(
                        "flex items-center justify-center gap-3 px-4 py-2 border rounded-sm font-mono text-sm uppercase transition-all w-full",
                        isMatrixEnabled 
                          ? "border-terminal-green text-terminal-green bg-terminal-green/10 shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                          : "border-terminal-green/30 text-terminal-green/50 hover:border-terminal-green/60"
                      )}
                    >
                      <div className={cx(
                        "w-2 h-2 rounded-full",
                        isMatrixEnabled ? "bg-terminal-green shadow-[0_0_5px_currentColor] animate-pulse" : "bg-terminal-green/30"
                      )} />
                      TOGGLE MATRIX
                    </button>
                  )}
                  
                  <Link
                    href="/cv"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center bg-terminal-green text-background px-4 py-2 font-bold rounded-sm hover:bg-white transition-colors text-sm w-full"
                  >
                    DOWNLOAD_CV
                  </Link>
                </div>
              </div>

              {/* Mobile Decorative Footer */}
              <div className="absolute bottom-8 left-8 right-8 text-[8px] text-terminal-green/20 font-mono">
                 [ NETWORK_NODE_VERIFIED ]<br />
                 [ ENCRYPTION: ACTIVE ]
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
