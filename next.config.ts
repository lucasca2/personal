import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "@/styles/breakpoints.scss";`,
    silenceDeprecations: ["legacy-js-api"],
  },
  experimental: {
    serverComponentsExternalPackages: ["mjml"],
  },
};

export default nextConfig;
