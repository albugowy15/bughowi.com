const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "user-images.githubusercontent.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
