// import rehypeToc from "@microflash/rehype-toc";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import { MDXOptions } from "contentlayer/core";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeToc from "@jsdevtools/rehype-toc";

interface RehypeElement {
  type: string;
  tagName?: string;
  value?: string;
  properties?: {
    className?: string;

  };
  children?: Array<RehypeElement>
}

const customizeTOC = (toc: RehypeElement): RehypeElement | null => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
  return {
    type: "element",
    tagName: "div",
    properties: { className: "toc" },
    children: [
      {
        type: "element",
        tagName: "p",
        properties: { className: "title" },
        children: [
          {
            type: "text",
            value: "Table of Contents",
          },
        ],
      },
      ...(toc.children || []),
    ],
  };
};

const options = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
  // Or your own JSON theme
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    name: { type: "string", required: true },
  },
}));

const TechList = defineNestedType(() => ({
  name: "TechList",
  fields: {
    name: { type: "string", required: true },
  },
}));

const Post = defineDocumentType(() => ({
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
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    techStack: {
      type: "list",
      of: TechList,
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "src/contents",
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [
        rehypeToc,
        {
          customizeTOC,
        },
      ],
      [rehypeExternalLinks, { target: "_blank", rel: "noreferrer" }],
      [rehypePrettyCode, options],
    ],
  },
});

export default contentLayerConfig;
