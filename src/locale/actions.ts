"use server";

import { cookies } from "next/headers";
import { Dictionary, getDynamicDictionary } from "./dictionaries";
import { headers } from "next/headers";

export type Locale = "pt" | "en";

const LOCALE_KEY = "@lucas/locale";

const getDefaultLocale = async (): Promise<Locale> => {
  let defaultLocale = "en";

  const browserHeaders = await headers();
  const acceptLanguage = browserHeaders.get("accept-language");

  const userLanguage = acceptLanguage ? acceptLanguage.split(",")[0] : "en";
  const isPT = userLanguage.includes("pt");

  if (isPT) defaultLocale = "pt";

  return defaultLocale as Locale;
};

export const getStoragedLocale = async (): Promise<Locale> => {
  const defaultLocale = await getDefaultLocale();
  const cookiesStore = await cookies();

  const storedLocale = cookiesStore.get(LOCALE_KEY);

  return (storedLocale?.value || defaultLocale) as Locale;
};

export const setStoragedLocale = async (locale: Locale): Promise<void> => {
  const cookiesStore = await cookies();

  cookiesStore.set(LOCALE_KEY, locale);
};

export const getDictionary = async (): Promise<Dictionary> => {
  const locale = await getStoragedLocale();

  return (await getDynamicDictionary(locale)) as Dictionary;
};
