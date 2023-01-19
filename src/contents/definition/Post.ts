import { defineDocumentType } from "contentlayer/source-files";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import { Category } from "./Tag";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    isFeatured: {
      type: "boolean",
      required: true,
    },
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const slugger = new GithubSlugger();

        const regXHeader = /\n\n(?<flag>#{2,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
  },
}));
