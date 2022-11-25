import { Project } from "../../../.contentlayer/generated";
import Link from "next/link";
import ProjectCard from "@components/card/ProjectCard";
import { motion } from "framer-motion";

function PersonalProjects({ projects }: { projects: Project[] }) {
	return (
		<motion.section initial={{ opacity: 0.1, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 1 }} viewport={{ once: true }} id="personal-projects" className="my-8">
			<Link href="/projects">
				<h2 className="text-3xl font-bold hover:cursor-pointer hover:text-blueAccent w-fit transition-colors">Personal Projects</h2>
			</Link>
			<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project) => (
					<ProjectCard key={project.url} {...project} />
				))}
			</div>
		</motion.section>
	);
}

export default PersonalProjects;
