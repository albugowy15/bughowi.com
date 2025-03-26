import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Mohamad Kholid Bughowi's Personal Blog",
    description:
      'Software architect and engineer with a passion for building comprehensive solutions. From initial concept to production deployment, I create robust systems that drive business value and user satisfaction.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}`,
    })),
  });
}
