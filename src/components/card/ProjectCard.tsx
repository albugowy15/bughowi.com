import Typography from "@components/Typography";
import { Project } from "../../../.contentlayer/generated";
import Link from "next/link";

function ProjectCard(project: Project) {
  return (
    <div className="flex flex-col bg-darkSecondary p-4 border border-slate-300 border-opacity-40 rounded-md hover:scale-[1.02] transition-transform ease-in-out">
      <Typography
        variant="h4"
        className="hover:text-blueAccent transition-colors"
      >
        <Link href={project.url}>{project.title}</Link>
      </Typography>
      <Typography variant="body1">{project.description}</Typography>
      <div className="flex flex-wrap gap-1 mt-2">
        {project.techStack.map((tech, key) => (
          <Typography
            variant="label1"
            key={key}
            className="px-1 py-[0.20rem] bg-blueAccent rounded-md"
          >
            {tech.name}
          </Typography>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
