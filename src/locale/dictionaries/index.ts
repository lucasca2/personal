"use server";
import { Locale } from "../actions";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

export type DictionaryKeys = keyof typeof dictionaries;

export type DictionaryLoaders = (typeof dictionaries)[DictionaryKeys];

export type Dictionary = Awaited<ReturnType<DictionaryLoaders>>;

export const getDynamicDictionary = async (locale: Locale) =>
  dictionaries[locale]();
