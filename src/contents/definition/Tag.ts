import { defineNestedType } from "contentlayer/source-files";

export const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    name: { type: "string", required: true },
  },
}));

export const TechList = defineNestedType(() => ({
  name: "TechList",
  fields: {
    name: { type: "string", required: true },
  },
}));
