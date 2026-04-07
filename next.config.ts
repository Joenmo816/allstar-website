import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:city/pest-library/:slug",
        destination: "/city-pest/:city/:slug",
      },
    ];
  },
};

export default nextConfig;