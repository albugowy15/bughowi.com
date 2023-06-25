import { allProjects, Project } from "../../../.contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import ProjectDetail from "modules/project/pages/ProjectDetail";

export default function ProjectDetailPage({ project }: { project: Project }) {
  return <ProjectDetail project={project} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map((project) => project.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = allProjects.find(
    (project) => project.url === `/projects/${context.params?.slug}`
  );

  return {
    props: {
      project,
    },
  };
};
