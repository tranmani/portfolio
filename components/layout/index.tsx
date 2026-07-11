import React, { ReactNode } from "react";
import Meta from "./meta";
import Nav from "./Nav";
import cx from "classnames";
import { useGamification } from "@/lib/context/GamificationContext";
import dynamic from 'next/dynamic';

const MatrixRain = dynamic(() => import('../MatrixRain'), { ssr: false });
const RecruiterWidget = dynamic(() => import('../RecruiterWidget'), { ssr: false });

export default function Layout({
  meta,
  children,
  showEffects = true,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
  showEffects?: boolean;
}) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const { level, xp, progressToNextLevel, isMatrixEnabled } = useGamification();
  
  // Calculate a 10-character progress bar
  const segments = 10;
  const filledSegments = Math.round((progressToNextLevel / 100) * segments);
  const progressBar = "[" + "#".repeat(filledSegments) + "-".repeat(segments - filledSegments) + "]";

  // Root access notification
  const [hasNotifiedRoot, setHasNotifiedRoot] = React.useState(false);
  React.useEffect(() => {
    if (level === "root" && !hasNotifiedRoot) {
      // Allow visual effects (Matrix/Recruiter button) to trigger 
      // instead of blocking browser thread with alert, so we removed it
      setHasNotifiedRoot(true);
    }
  }, [level, hasNotifiedRoot]);
  
  return (
    <div className={cx("min-h-screen flex flex-col relative", showEffects && "crt-effect")}>
      {level === "root" && isMatrixEnabled && <MatrixRain />}
      
      <Meta {...meta} />
      {showEffects && <div className="scanline-overlay pointer-events-none" />}
      <Nav />
      
      <main className={cx("pt-24 pb-12 px-6 max-w-7xl mx-auto w-full flex-grow relative z-10")}>
        {children}
      </main>

      <footer className="mt-auto py-8 flex flex-col items-center justify-center gap-4 border-t border-terminal-border text-[10px] text-terminal-green/40 uppercase tracking-[0.2em] relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center bg-terminal-green/5 px-4 py-2 border border-terminal-green/10 rounded">
            <span>[PRIVILEGE: {level}]</span>
            <span>XP: {xp}</span>
            <span>{progressBar} {progressToNextLevel.toFixed(0)}% TO NEXT TIER</span>
        </div>
        <div className="text-terminal-green/30">
            &copy; {year} SOFTWARE_ENGINEER_CORE // SYSTEM_VERSION_4.2.0
        </div>
      </footer>

      <RecruiterWidget />
    </div>
  );
}
