import { Project } from "contentlayer/generated";
import Link from "next/link";

function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, key) => (
        <Link key={key} href={project.url}>
          <div
            key={key}
            className="flex flex-col gap-3 justify-start bg-slate-200 dark:bg-darkSecondary p-4 border border-slate-300 border-opacity-40 rounded-md hover:scale-[1.015] duration-500 ease-in-out cursor-pointer"
          >
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="text-sm text-opacity-80">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, key) => (
                <p
                  key={key}
                  className="px-1 py-[0.20rem] bg-blueAccent text-slate-100 text-sm w-fit rounded-md"
                >
                  {tech.toLocaleString()}
                </p>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
