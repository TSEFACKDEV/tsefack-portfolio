import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tsefack.online" }],
        destination: "https://tsefack.online/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "tsefackdev.vercel.app" }],
        destination: "https://tsefack.online/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
