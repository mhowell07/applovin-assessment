import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axon.ai",
        pathname: "/animated-cards/**",
      },
    ],
  },
};

export default nextConfig;
