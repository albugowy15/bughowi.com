import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    thumbnail: z.string(),
    date: z.date(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    date: z.date(),
    tech: z.array(z.string()),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  about: aboutCollection,
};
