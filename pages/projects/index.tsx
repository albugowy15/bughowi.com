import ProjectCard from "components/card/ProjectCard";
import { Project } from "contentlayer/generated";
import Head from "next/head";
import { getAllProjects } from "utils/contents";

function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title>Projects - bughowi.com</title>
        <meta
          name="description"
          content="Showcase of the projects I've work on"
        />
      </Head>
      <div className="py-4" />
      <h2 className="text-center font-bold text-3xl">Projects</h2>
      <p className="text-center py-3">
        Showcase of the projects I&apos;ve work on
      </p>
      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, key) => (
          <ProjectCard key={key} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectsPage;

export async function getStaticProps() {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
