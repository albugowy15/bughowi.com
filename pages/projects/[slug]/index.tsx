import { allProjects, Project } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <>
      <Head>
        <title>{`Project - ${project.title} - bughowi.com`}</title>
        <meta name="description">{project.description}</meta>
      </Head>
      <div className="py-10" />
      <div className="">
        <h1>{project.title}</h1>
      </div>
    </>
  );
}

export default ProjectDetailPage;

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
  console.log(project);
  return {
    props: {
      project,
    },
  };
};
