import React from "react";

const useDarkMode = () => {
  const [theme, setTheme] = React.useState("");

  React.useEffect(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in window.localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(window.localStorage.theme);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    window.localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
  };

  return { theme, toggleTheme }
};

export default useDarkMode;