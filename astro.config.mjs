import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
    remarkPlugins: [remarkReadingTime],
  },
  experimental: {
    assets: true,
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: [
      'images.unsplash.com',
      'user-images.githubusercontent.com',
      'avatars.githubusercontent.com',
      'github.com',
      'blogger.googleusercontent.com',
    ],
  },
  site: 'https://www.bughowi.com',
  integrations: [tailwind(), mdx(), sitemap(), react()],
});
