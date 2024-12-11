"use client";

import { Icon } from "../Icon/Icon";
import styles from "./ThemeToggle.module.scss";
import { useTheme } from "./useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.wrapper} onClick={toggleTheme}>
      {theme === "light" && <Icon name="moon" className={styles.moon} />}
      {theme === "dark" && <Icon name="sun" className={styles.sun} />}
    </button>
  );
};
