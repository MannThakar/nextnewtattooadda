/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
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
};

module.exports = nextConfig;
