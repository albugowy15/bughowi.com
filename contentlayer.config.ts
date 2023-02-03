import { makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { rehypePrettyCodeOptions } from "./src/utils/contents";
import { Post } from "./src/contents/definition/Post";
import { Project } from "./src/contents/definition/Project";

const contentLayerConfig = makeSource({
  contentDirPath: "src/contents",
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [rehypeExternalLinks, { target: "_blank", rel: "noreferrer" }],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});

export default contentLayerConfig;
