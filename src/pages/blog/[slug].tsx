import { allPosts } from "../../../.contentlayer/generated";
import { Post } from "../../../.contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogDetail from "modules/blog/pages/BlogDetail";

export default function PostDetail({ post }: { post: Post }) {
	return <BlogDetail post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = allPosts.map((post) => post.url);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const post = allPosts.find((post) => post.url === `/blog/${context.params?.slug}`);

	return {
		props: {
			post: post,
		},
	};
};
