import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import React from "react";
const ThemeProvider = dynamic(() => import("@/lib/hooks/use-dark-mode"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
        <Analytics />
      </RWBProvider>
    </ThemeProvider>
  );
}
export default MyApp;
