import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/filemaker-pricing",
        permanent: true
      },
      {
        source: "/webinars",
        destination: "/filemaker-webinars",
        permanent: true
      },
      {
        source: "/about",
        destination: "/about-nick-hunter",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
