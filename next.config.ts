import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { qualities: [75, 90] },
  turbopack: { root: process.cwd() },
  async redirects() {
    return [{ source: "/work/dietl-family-kitchen-table", destination: "/work/massive-gathering-table", permanent: true }];
  },
};
export default nextConfig;
