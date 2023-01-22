import { getAllProjects, getNProjects } from "@utils/contents";
import Projects from "modules/project/pages/Projects";
import { Project } from "../../../.contentlayer/generated";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return <Projects projects={projects} />;
}

export async function getStaticProps() {
  const projects = getNProjects(6);

  return {
    props: {
      projects,
    },
  };
}
