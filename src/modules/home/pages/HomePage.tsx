import OpenGraph from "@components/common/OpenGraph";
import Intro from "modules/home/components/Intro";
import RecentPosts from "modules/blog/components/RecentPosts";
import PersonalProjects from "modules/project/components/PersonalProjects";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import Head from "next/head";
import { Post, Project } from "../../../../.contentlayer/generated";

const HomePage = ({ posts, projects }: { posts: Post[]; projects: Project[] }) => {
	const ogProperties = useOpenGraph({
		url: "https://www.bughowi.com",
		title: "Home | bughowi.com",
		image: {
			type: "image/png",
			url: "https://user-images.githubusercontent.com/49820990/188320807-8d2143c9-5786-4f4b-bbed-2d4bb32069b9.png",
			alt: "A personal blog to showcase projects and some articles in Wed Development fields",
		},
		description: "A personal blog to showcase projects and some articles in Wed Development fields",
		type: "website",
		site_name: "Bughowi.com",
		author: "Mohamad Kholid Bughowi",
	});
	return (
		<>
			<Head>
				<title>Home - bughowi.com</title>
				<meta name='description' content='A personal blog to showcase projects and some articles in Wed Development fields' />

				<OpenGraph properties={ogProperties} />
			</Head>
			<Intro />
			<RecentPosts posts={posts} />
			<div className='py-4' />
			<PersonalProjects projects={projects} />
		</>
	);
};

export default HomePage;
