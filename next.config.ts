import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mentalhealth",
        destination: "/mental-health",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;