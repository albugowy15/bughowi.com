import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    imageService: true,
    analytics: true,
    imagesConfig: {
      domains: ['images.unsplash.com', 'user-images.githubusercontent.com', 'avatars.githubusercontent.com', 'github.com', 'blogger.googleusercontent.com'],
      sizes: [320, 640, 1080],
    }
  }),
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    remarkPlugins: [remarkReadingTime]
  },
  experimental: {
    assets: true,
  },
  image: {
    service: {
      entrypoint:"astro/assets/services/sharp",
    },
    domains: ['images.unsplash.com', 'user-images.githubusercontent.com', 'avatars.githubusercontent.com', 'github.com', 'blogger.googleusercontent.com'],
  },
  site: 'https://www.bughowi.com',
  integrations: [tailwind(), mdx()]
});