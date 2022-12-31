import { Post, Project } from "../../.contentlayer/generated";
import { getAllPosts, getAllProjects } from "@utils/contents";
import HomePage from "modules/home/pages/HomePage";

export default function Home({ posts, projects }: { posts: Post[]; projects: Project[] }) {
	return <HomePage posts={posts} projects={projects} />;
}

export async function getStaticProps() {
	const posts = getAllPosts();
	const projects = getAllProjects();
	return {
		props: {
			posts,
			projects,
		},
	};
}
