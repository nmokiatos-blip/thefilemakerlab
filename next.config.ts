import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/filemaker-pricing",
        destination: "/pricing",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
