import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/massive-gathering-table",
        destination: "/work/dietl-family-kitchen-table",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
