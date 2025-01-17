/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|png|jpe?g|gif)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
