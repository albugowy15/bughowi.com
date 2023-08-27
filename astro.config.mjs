import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
import preact from '@astrojs/preact';
const astroExpressiveCodeOptions = {
  // Example: Change the theme to "dracula"
  theme: 'dracula',
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
    domains: [
      'user-images.githubusercontent.com',
      'avatars.githubusercontent.com',
      'github.com',
      'blogger.googleusercontent.com',
      'res.cloudinary.com',
    ],
  },
  redirects: {
    '/blog': '/blog/page/1',
    '/projects': '/projects/page/1',
  },
  site: 'https://www.bughowi.com',
  integrations: [
    tailwind(),
    expressiveCode(astroExpressiveCodeOptions),
    mdx(),
    sitemap(),
    react(),
    preact(),
  ],
});
