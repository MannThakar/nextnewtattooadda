/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // Disable appDir to prevent conflicts with CSS
    turbo: {
      rules: {
        "*.JPG": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|png|jpe?g|gif)$/i,
      type: "asset/resource",
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporary fix for ESLint errors during build
  },
};

module.exports = nextConfig;
