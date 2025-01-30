/** @type {import('next').NextConfig} */
const { version } = require("./package.json");

const nextConfig = {
  swcMinify: true,
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    version,
  },
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  reactStrictMode: true,

  experimental: {
    serverActions: {
      allowedOrigins: ["localhost"],
    },
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/signup",
      },
    ];
  },
};

module.exports = nextConfig;
