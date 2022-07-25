import Projects from "components/projects/Projects";
import { Project } from "contentlayer/generated";
import Head from "next/head";
import { getAllProjects } from "utils/contents";

function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title>bughowi.com - Projects</title>
        <meta name="description" content="Some of my personal projects" />
      </Head>
      <div className="py-10" />
      <h1 className="text-center font-bold text-3xl">Projects</h1>
      <p className="text-center py-3">
        Showcase of the projects I&apos;ve work on
      </p>
      <Projects projects={projects} />
    </>
  );
}

export default ProjectsPage;

export async function getStaticProps() {
  const projects = getAllProjects();
  console.log(projects);
  return {
    props: {
      projects,
    },
  };
}
