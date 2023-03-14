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
      <div className="flex justify-center">
        <div className="hidden h-screen w-72 justify-center bg-slate-200 lg:flex">
          <Nav />
        </div>
        <div className="flex w-[1000px] bg-slate-100">{children}</div>
      </div>

      {/* <main className="flex w-full flex-col items-center justify-center py-32">{children}</main> */}
      {/* Footer */}
    </>
  );
}
