import ProjectCard from "@components/card/ProjectCard";
import OpenGraph from "@components/common/OpenGraph";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import Head from "next/head";
import { Project } from "../../../../.contentlayer/generated";

export default function Projects({ projects }: { projects: Project[] }) {
	const ogProperties = useOpenGraph({
		url: "https://www.bughowi.com/projects",
		title: "Projects | bughowi.com",
		image: {
			type: "image/png",
			url: "https://user-images.githubusercontent.com/49820990/188320807-8d2143c9-5786-4f4b-bbed-2d4bb32069b9.png",
			alt: "Showcase of the projects I've work on",
		},
		description: "Showcase of the projects I've work on",
		type: "website",
		site_name: "Bughowi.com",
		author: "Mohamad Kholid Bughowi",
	});

	return (
		<>
			<Head>
				<title>Projects - bughowi.com</title>
				<meta name="description" content="Showcase of the projects I've work on" />

				<OpenGraph properties={ogProperties} />
			</Head>
			<div className="py-4" />
			<h2 className="text-center font-bold text-3xl">Projects</h2>
			<p className="text-center py-3 text-lg">Showcase of the projects I&apos;ve work on</p>
			<div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, key) => (
					<ProjectCard key={key} {...project} />
				))}
			</div>
		</>
	);
}
