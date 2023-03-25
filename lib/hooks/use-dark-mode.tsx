import React from "react";

interface ITheme {
  theme: "dark" | "light";
  toggleTheme: () => void;
  children?: React.ReactNode;
}

interface IProps {
  children?: React.ReactNode;
}

export const ThemeContext = React.createContext<ITheme>({
  theme: "dark",
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<IProps> = (props) => {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    if (!window) return;
    if (!window.matchMedia) return;

    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      window.localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.theme = "light";
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (!document) return;
    else {
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
      window.localStorage.theme = newTheme;
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
