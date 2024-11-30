"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./ThemeToggle.module.scss";

type Theme = "light" | "dark";

const THEME_KEY = "@lucas/theme";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const htmlElement = useRef<HTMLElement | null>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      htmlElement.current = document.querySelector("html");

      const savedTheme = localStorage.getItem(THEME_KEY) as Theme;

      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      localStorage.setItem(THEME_KEY, newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    if (htmlElement.current) {
      htmlElement.current.classList.remove("light", "dark");
      htmlElement.current.classList.add(theme);
    }
  }, [theme]);

  return (
    <button className={styles.wrapper} onClick={handleToggleTheme}>
      {theme === "light" && <Icon name="moon" className={styles.moon} />}
      {theme === "dark" && <Icon name="sun" className={styles.sun} />}
    </button>
  );
};
