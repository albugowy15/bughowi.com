import { Project } from "@contentlayer/generated";
import Link from "next/link";

function ProjectCard(project: Project) {
  return (
    <div className="flex flex-col bg-darkSecondary p-4 border border-slate-300 border-opacity-40 rounded-md hover:scale-[1.02] transition-transform ease-in-out">
      <h3 className="font-bold text-xl hover:text-blueAccent transition-colors w-fit">
        <Link href={project.url}>{project.title}</Link>
      </h3>
      <p className="text-opacity-80">{project.description}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {project.techStack.map((tech, key) => (
          <p
            key={key}
            className="px-1 py-[0.20rem] bg-blueAccent text-slate-100 text-sm w-fit rounded-md"
          >
            {tech.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
