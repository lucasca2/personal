"use client";

import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./ThemeToggle.module.scss";
import { getStoragedTheme, setStoragedTheme, Theme } from "./ThemeToggle.actions";

export const ThemeToggle = () => {
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
    <button className={styles.wrapper} onClick={handleToggleTheme}>
      {theme === "light" && <Icon name="moon" className={styles.moon} />}
      {theme === "dark" && <Icon name="sun" className={styles.sun} />}
    </button>
  );
};
