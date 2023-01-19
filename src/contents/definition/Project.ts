import { TechList } from "./Tag";
import { defineDocumentType } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
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
    thumbnail: {
      type: "string",
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
