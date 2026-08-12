import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import mermaid from "astro-mermaid";
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig, fontProviders } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Roboto Flex",
      cssVariable: "--font-roboto",
      weights: [400, 500, 600, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
  output: "static",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  image: {
    domains: [
      "user-images.githubusercontent.com",
      "avatars.githubusercontent.com",
      "github.com",
      "blogger.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
  redirects: {
    "/blog": "/blog/page/1",
    "/projects": "/projects/page/1",
  },
  site: "https://bughowi.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mermaid({
      theme: "dark",
      autoTheme: false,
      enableLog: false,
    }),
    astroExpressiveCode({
      themes: ["vesper"],
    }),
    mdx(),
    sitemap(),
  ],
});
