const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "images.unsplash.com",
      "localhost:3000",
      "avatars.githubusercontent.com",
      "github.com",
      "blogger.googleusercontent.com",
    ],
  },
});
