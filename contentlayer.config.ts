import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeToc from "@jsdevtools/rehype-toc";
import { rehypePrettyCodeOptions } from "./src/utils/contents";

interface RehypeElement {
	type: string;
	tagName?: string;
	value?: string;
	properties?: {
		className?: string;
	};
	children?: Array<RehypeElement>;
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
			[rehypePrettyCode, rehypePrettyCodeOptions],
		],
	},
});

export default contentLayerConfig;
