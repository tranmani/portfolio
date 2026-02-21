import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";


import { GamificationProvider } from "@/lib/context/GamificationContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GamificationProvider>
      <RWBProvider>
        <Component {...pageProps} />
        <Analytics />
      </RWBProvider>
    </GamificationProvider>
  );
}
export default MyApp;
