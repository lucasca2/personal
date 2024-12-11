"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getStoragedTheme,
  setStoragedTheme,
  Theme,
} from "./ThemeToggle.actions";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  toggleTheme: () => void;
  theme: Theme | undefined;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | undefined>();

  const fetchInitialTheme = async () => {
    const storedTheme = await getStoragedTheme();
    setTheme(storedTheme);
  };

  useEffect(() => {
    fetchInitialTheme();
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setStoragedTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme: handleToggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
