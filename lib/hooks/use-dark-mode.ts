import React from "react";

const useDarkMode = () => {
  const [theme, setTheme] = React.useState<"dark" | "light">("light");

  React.useEffect(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(theme === 'dark' ? 'light' : 'dark')

    console.log(window);

  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme }
};

export default useDarkMode;