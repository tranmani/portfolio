import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

export type AccessLevel = "guest" | "user" | "root";

interface GamificationState {
  xp: number;
  level: AccessLevel;
  visitedPages: Set<string>;
  visitPage: (path: string) => void;
  progressToNextLevel: number; // 0 to 100
  isMatrixEnabled: boolean;
  toggleMatrix: () => void;
}

const GamificationContext = createContext<GamificationState | undefined>(undefined);

export const GamificationProvider = ({ children }: { children: ReactNode }) => {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState<AccessLevel>("guest");
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set());
  const [isMatrixEnabled, setIsMatrixEnabled] = useState(true);
  const router = useRouter();

  const calculateLevel = (currentXP: number): AccessLevel => {
    if (currentXP >= 60) return "root";
    if (currentXP >= 20) return "user";
    return "guest";
  };

  const calculateProgress = (currentXP: number, currentLevel: AccessLevel): number => {
    if (currentLevel === "root") return 100;
    if (currentLevel === "guest") {
      // 0 to 20 XP range
      return (currentXP / 20) * 100;
    }
    if (currentLevel === "user") {
      // 20 to 60 XP range (40 XP diff)
      return ((currentXP - 20) / 40) * 100;
    }
    return 0;
  };

  const visitPage = (path: string) => {
    setVisitedPages((prev) => {
      // Clean up the path to its base path (e.g. /projects?tag=foo -> /projects)
      const cleanPath = path.split("?")[0];
      
      if (!prev.has(cleanPath)) {
        const newSet = new Set(prev);
        newSet.add(cleanPath);
        
        // Grant 10 XP for each new unique page visit
        setXP((prevXP) => {
          const newXP = prevXP + 10;
          setLevel(calculateLevel(newXP));
          return newXP;
        });
        
        return newSet;
      }
      return prev;
    });
  };

  // Automatically track page visits on route changes
  useEffect(() => {
    visitPage(router.asPath);
    
    const handleRouteChange = (url: string) => {
      visitPage(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath]);

  // Load from local storage initially
  useEffect(() => {
    const savedData = localStorage.getItem("gamification_state");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setXP(parsed.xp || 0);
        setLevel(parsed.level || "guest");
        setVisitedPages(new Set(parsed.visitedPages || []));
        if (parsed.isMatrixEnabled !== undefined) {
          setIsMatrixEnabled(parsed.isMatrixEnabled);
        }
      } catch (e) {}
    }
  }, []);

  // Save to local storage on changes
  useEffect(() => {
    if (xp > 0 || visitedPages.size > 0) {
        localStorage.setItem("gamification_state", JSON.stringify({
            xp,
            level,
            visitedPages: Array.from(visitedPages),
            isMatrixEnabled
        }));
    }
  }, [xp, level, visitedPages, isMatrixEnabled]);

  const value = {
    xp,
    level,
    visitedPages,
    visitPage,
    progressToNextLevel: calculateProgress(xp, level),
    isMatrixEnabled,
    toggleMatrix: () => setIsMatrixEnabled(prev => !prev),
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error("useGamification must be used within a GamificationProvider");
  }
  return context;
};
