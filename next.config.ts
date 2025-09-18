import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  basePath: "/new",
  images: {
    domains: ['127.0.0.1'],
    unoptimized: true,
  },
};

export default nextConfig;