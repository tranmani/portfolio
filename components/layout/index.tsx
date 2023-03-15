import { ReactNode } from "react";
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
      <main className="">{children}</main>
      {/* Footer */}
    </>
  );
}
