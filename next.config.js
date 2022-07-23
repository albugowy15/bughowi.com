const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  images: {
    domains: ["images.unsplash.com", "localhost"],
  },
});
