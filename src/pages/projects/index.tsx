import { getAllProjects } from "@utils/contents";
import Projects from "modules/project/pages/Projects";
import { Project } from "../../../.contentlayer/generated";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
	return <Projects projects={projects} />;
}

export async function getStaticProps() {
	const projects = getAllProjects();

	return {
		props: {
			projects,
		},
	};
}
