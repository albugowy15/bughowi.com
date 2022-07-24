import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    name: { type: "string", required: true },
  },
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
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
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\/mdx$/, ""),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "contents",
  documentTypes: [Post],
});

export default contentLayerConfig;
