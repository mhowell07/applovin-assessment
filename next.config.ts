import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
