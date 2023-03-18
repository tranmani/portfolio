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
      <Nav />

      {/* Main */}
      <main className="">
        <ParticlesBackground />
        {children}
      </main>

      {/* Footer */}
    </>
  );
}
