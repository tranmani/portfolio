import React, { ReactNode } from "react";
import Meta from "./meta";
import Nav from "./Nav";
import cx from "classnames";

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
  
  return (
    <div className={cx("min-h-screen flex flex-col", showEffects && "crt-effect")}>
      <Meta {...meta} />
      {showEffects && <div className="scanline-overlay" />}
      <Nav />
      
      <main className={cx("pt-24 pb-12 px-6 max-w-7xl mx-auto w-full flex-grow")}>
        {children}
      </main>

      <footer className="mt-auto py-8 text-center border-t border-terminal-border text-[10px] text-terminal-green/30 uppercase tracking-[0.2em]">
        &copy; {year} SOFTWARE_ENGINEER_CORE // SYSTEM_VERSION_4.2.0
      </footer>
    </div>
  );
}
