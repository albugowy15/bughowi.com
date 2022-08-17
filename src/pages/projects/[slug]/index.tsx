import { allProjects, Project } from "../../../../.contentlayer/generated";
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
        <title>{`${project.title} - Projects | bughowi.com`}</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="py-4" />

      <main className="w-full lg:w-[65%] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
        <p className="text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <article className="mt-5 w-full">
          <div id="content-space" className="py-3">
            <MDXContent />
          </div>
          <div className="border-y-2 border-slate-700 dark:border-slate-400 mt-3 text-base sm:text-lg">
            <p className="py-4 flex flex-wrap items-center gap-2">
              Tech Stack :{" "}
              {project.techStack?.map((tech, idx) => (
                <span
                  className="p-0.5 text-base sm:text-lg bg-blueAccent text-slate-100 rounded-lg"
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
