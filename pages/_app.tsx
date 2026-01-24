import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RWBProvider>
      <Component {...pageProps} />
      <Analytics />
    </RWBProvider>
  );
}
export default MyApp;
