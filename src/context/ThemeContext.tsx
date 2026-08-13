import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./theme-context";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [theme, setTheme] = useState<Theme>(() => {

    const saved = localStorage.getItem("theme");

    return (saved as Theme) || "dark";

  });

  useEffect(() => {

    document.body.className = theme;

    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {

    setTheme(theme === "dark" ? "light" : "dark");

  };

  return (

    <ThemeContext.Provider

      value={{ theme, toggleTheme }}

    >

      {children}

    </ThemeContext.Provider>

  );

}