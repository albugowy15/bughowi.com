import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercelStatic from '@astrojs/vercel';
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';
import expressiveCode, { type AstroExpressiveCodeOptions } from 'astro-expressive-code';

const astroExpressiveCodeOptions: AstroExpressiveCodeOptions = {
	// Example: Change the theme to "dracula"
	// @ts-expect-error this is should be ok
	theme: 'dracula',
};

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercelStatic(),
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
	integrations: [tailwind(), expressiveCode(astroExpressiveCodeOptions), mdx(), sitemap()],
});
