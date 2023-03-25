import { ReactNode } from "react";
import { ParticlesBackground } from "../home/ParticlesBackground";
import Meta from "./meta";
import Nav from "./Nav";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  return (
    <>
      <Meta {...meta} />

      {/* Nav */}

      {/* Main */}
      <main className="overflow-hidden bg-white dark:bg-gradient-to-b dark:from-[#1d1d1d] dark:to-[#0F0F0F]">
        <ParticlesBackground />
        {children}
      </main>

      {/* Footer */}
    </>
  );
}
