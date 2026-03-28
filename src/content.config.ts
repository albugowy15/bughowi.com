import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ base: "src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    thumbnail: z.string(),
    date: z.date(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    date: z.date(),
    tech: z.array(z.string()),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ base: "src/content/about", pattern: "**/*.{md,mdx}" }),
});

const snippetCollection = defineCollection({
  loader: glob({ base: "src/content/snippets", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    date: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  about: aboutCollection,
  snippets: snippetCollection,
};
