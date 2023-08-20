import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    remarkPlugins: [remarkReadingTime]
  },
  site: 'https://www.bughowi.com',
  integrations: [tailwind(), mdx()]
});