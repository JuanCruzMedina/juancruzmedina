import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/resume", destination: "/experience", permanent: true },
      {
        source: "/blog/:slug((?!en|es).*)",
        destination: "/blog/en/:slug",
        permanent: true,
      },
    ];
  },
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      { hostname: "import.cdn.thinkific.com", pathname: "/**" },
      { hostname: "upload.wikimedia.org", pathname: "/**" },
      { hostname: "www.udemy.com", pathname: "/**" },
      { hostname: "mc-8afc6902-e56c-432c-8c3f-3991-cdn-endpoint.azureedge.net", pathname: "/**" },
    ],
  },
};

export default nextConfig;
