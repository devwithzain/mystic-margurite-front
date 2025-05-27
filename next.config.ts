import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  devIndicators: false,
  trailingSlash: true,
  images: {
    domains: ['127.0.0.1'],
    unoptimized: true,
  },
};

export default nextConfig;