"use server";

import { cookies } from "next/headers";

export type Theme = "light" | "dark";

const THEME_KEY = "@lucas/theme";

export const getStoragedTheme = async (): Promise<Theme> => {
  const cookiesStore = await cookies();

  const storedTheme = cookiesStore.get(THEME_KEY);

  return (storedTheme?.value || "dark") as Theme;
};

export const setStoragedTheme = async (theme: Theme): Promise<void> => {
  const cookiesStore = await cookies();

  cookiesStore.set(THEME_KEY, theme);
};
