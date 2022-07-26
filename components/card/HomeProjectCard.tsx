import { Project } from "contentlayer/generated";
import Link from "next/link";

function HomeProjectCard(project: Project) {
  return (
    <Link href={project.url}>
      <div className="flex flex-col gap-3 bg-slate-200 dark:bg-darkSecondary p-4 border border-slate-300 border-opacity-40 rounded-md hover:scale-[1.015] duration-500 ease-in-out cursor-pointer">
        <p className="font-bold text-xl">{project.title}</p>
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
  );
}

export default HomeProjectCard;
