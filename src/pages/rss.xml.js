import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog');
  return rss({
    // `<title>` field in output xml
    title: 'Mohamad Kholid Bughowi - bughowi.com',
    // `<description>` field in output xml
    description:
      'Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
      ...post.data,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
