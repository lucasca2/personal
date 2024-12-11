import "@/styles/global.scss";

import { Fira_Code } from "next/font/google";
import { getStoragedTheme } from "@/components/ThemeToggle/ThemeToggle.actions";
import { ThemeProvider } from "@/components/ThemeToggle/useTheme";
import { getDictionary, getStoragedLocale } from "@/locale/actions";
import { DictionaryProvider } from "@/locale/useDictionary";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--default-font-family",
});

export const generateMetadata = async () => {
  const dictionary = await getDictionary();

  return {
    title: dictionary.title,
    description: dictionary.description,
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storagedTheme = await getStoragedTheme();
  const storagedLocale = await getStoragedLocale();

  return (
    <html lang={storagedLocale} className={storagedTheme} translate="no">
      <head>
        <meta httpEquiv="Content-Language" content="pt,en" />
        <meta name="google" content="notranslate" />
      </head>
      <DictionaryProvider>
        <ThemeProvider>
          <body className={firaCode.className}>{children}</body>
        </ThemeProvider>
      </DictionaryProvider>
    </html>
  );
}
