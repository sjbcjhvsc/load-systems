import type { NextConfig } from "next";
import { ignoreListAnonymousStackFramesIfSandwiched } from "next/dist/next-devtools/server/shared";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};