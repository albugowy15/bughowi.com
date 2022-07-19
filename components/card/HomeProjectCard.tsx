import { Project } from "types/types";
interface Props {
  project: Project;
}
function HomeProjectCard({ project }: Props) {
  return (
    <div className="bg-darkSecondary p-4 border-2 rounded-lg border-slate-300 border-opacity-40 cursor-pointer hover:scale-[1.02] transition-transform ease-in-out">
      <p className="font-bold text-xl">{project.title}</p>
      <p className="text-sm text-slate-300 mt-2">{project.description}</p>
      <div className="flex gap-2 mt-5">
        {project.techStack.map((tech, key) => (
          <div
            key={key}
            className="px-1 py-[0.10rem] text-xs bg-blueAccent rounded"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProjectCard;
