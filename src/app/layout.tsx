import type { Metadata } from "next";
import "@/styles/global.scss";

import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--default-font-family",
});

export const metadata: Metadata = {
  title: "Lucas Costa Amaral | Senior FrontEnd Developer",
  description: "Senior FrontEnd Developer",

  // <meta http-equiv="Content-Language" content="pt,en">
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" translate="no">
      <head>
        <meta httpEquiv="Content-Language" content="pt,en" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
