import type { Metadata } from "next";
import "@/styles/global.scss";

import { Fira_Code } from "next/font/google";
import { getStoragedTheme } from "@/components/ThemeToggle/ThemeToggle.actions";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--default-font-family",
});

export const metadata: Metadata = {
  title: "Lucas Costa Amaral | Senior FrontEnd Developer",
  description: "Senior FrontEnd Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storagedTheme = await getStoragedTheme();

  return (
    <html lang="en" className={storagedTheme} translate="no">
      <head>
        <meta httpEquiv="Content-Language" content="pt,en" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
