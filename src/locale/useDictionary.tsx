"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getDictionary, getStoragedLocale, setStoragedLocale } from "./actions";
import { Locale } from "./actions";
import { Dictionary } from "./dictionaries";

type DictionaryProviderProps = {
  children: React.ReactNode;
};

type DictionaryContextType = {
  setLocale: (locale: Locale) => void;
  locale: Locale | undefined;
  dictionary: Dictionary | undefined;
};

const DictionaryContext = createContext<DictionaryContextType>(
  {} as DictionaryContextType
);

const DictionaryProvider = ({ children }: DictionaryProviderProps) => {
  const [locale, setLocale] = useState<Locale | undefined>();
  const [dictionary, setDictionary] = useState<Dictionary | undefined>();

  const fetchInitialLocale = async () => {
    const storedLocale = await getStoragedLocale();
    setLocale(storedLocale);

    const selectedDictionary = await getDictionary();
    setDictionary(selectedDictionary);
  };

  useEffect(() => {
    fetchInitialLocale();
  }, []);

  const handleSetLocale = async (_locale: Locale) => {
    if (locale !== _locale) {
      await setStoragedLocale(_locale);
      setLocale(_locale);

      const selectedDictionary = await getDictionary();
      setDictionary(selectedDictionary);
    }
  };

  return (
    <DictionaryContext.Provider
      value={{
        setLocale: handleSetLocale,
        locale,
        dictionary,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

const useDictionary = (): DictionaryContextType => {
  return useContext(DictionaryContext);
};

export { DictionaryProvider, useDictionary };
