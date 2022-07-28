import { allProjects, Project } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Giscus from "@giscus/react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useEffect, useState } from "react";
import { useThemeStore } from "store/store";

function ProjectDetailPage({ project }: { project: Project }) {
  const [giscusTheme, setGiscusTheme] = useState("dark");
  const themes = useThemeStore((state) => state.themes);

  useEffect(() => {
    if (document.querySelector("html")!.classList.contains("dark")) {
      setGiscusTheme("dark");
    } else {
      setGiscusTheme("light");
    }
  }, [giscusTheme, themes]);

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <>
      <Head>
        <title>{`${project.title} - Projects`}</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="py-10" />

      <main className="w-full lg:w-[65%] mx-auto">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <article className="mt-5 w-full">
          <div id="content-space" className="py-3">
            <MDXContent />
          </div>
          <div className="mt-3">
            <p className="py-4">
              Tech Stack :{" "}
              {project.techStack?.map((tech, idx) => (
                <span
                  className="p-1 bg-blueAccent text-slate-200 rounded-lg mr-3"
                  key={idx}
                >
                  {tech.toLocaleString()}
                </span>
              ))}
            </p>
          </div>
        </article>
        <div className="py-4" />
        <Giscus
          id="comments"
          repo="albugowy15/bughowi.com"
          repoId="R_kgDOHqneBQ"
          category="Announcements"
          categoryId="DIC_kwDOHqneBc4CQdnP"
          mapping="url"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme={giscusTheme}
          lang="en"
          loading="lazy"
        />
      </main>
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

  return {
    props: {
      project,
    },
  };
};
