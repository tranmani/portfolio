import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import Nav from "@/components/layout/Nav";
// import useDarkMode from "@/lib/hooks/use-dark-mode";
import React from "react";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// create context for dark mode
export const DarkModeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme || "dark");
  }, []);

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable, theme, "transition duration-700 ease-in-out")}>
          <Nav onToggleTheme={toggleTheme} theme={theme} />
          <Component {...pageProps} />
        </div>
      </RWBProvider>
    </DarkModeContext.Provider>
  );
}
export default MyApp;

// Path: components\layout\Nav.tsx
// Compare this snippet from components\layout\Nav.tsx:
// import { useRouter } from "next/router";
// import React from "react";
// import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
// import { useDarkMode } from "@/lib/hooks/use-dark-mode";
//
// interface INav {
//   onToggleTheme: () => void;
// }
//
// const Nav: React.FC<INav> = ({ onToggleTheme }) => {
//   const {

// export default function MyApp({ Component, pageProps: {} }: AppProps) {
//   const { theme, toggleTheme } = useDarkMode();

//   return (
//     <RWBProvider>
//       <div className={cx(sfPro.variable, inter.variable, theme)}>
//         <Nav onToggleTheme={toggleTheme} />
//         <Component />
//       </div>
//     </RWBProvider>
//   );
// }
