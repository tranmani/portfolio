import React, { ReactNode } from "react";
import { ParticlesBackground } from "../home/ParticlesBackground";
import Meta from "./meta";
import Nav from "./Nav";
import cx from "classnames";

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
    <div>
      <Meta {...meta} />

      {/* Nav */}
      <Nav />

      {/* Main */}
      <main className={cx("overflow-hidden")}>
        <ParticlesBackground />
        {children}
      </main>

      {/* Footer */}
    </div>
  );
}
