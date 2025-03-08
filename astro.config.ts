import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';
import astroExpressiveCode from 'astro-expressive-code';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  image: {
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
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    astroExpressiveCode({
      themes: ['aurora-x'],
    }),
    mdx(),
    sitemap(),
    react(),
  ],
});
