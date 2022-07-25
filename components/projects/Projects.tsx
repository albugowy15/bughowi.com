import { Project } from "contentlayer/generated";
import Image from "next/image";

function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, key) => (
        <div
          key={key}
          className="flex flex-col gap-3 justify-start bg-darkSecondary p-4 border border-white border-opacity-40 rounded-md hover:scale-[1.015] duration-500 ease-in-out cursor-pointer"
        >
          <p className="font-bold text-xl">{project.title}</p>
          <p className="text-sm text-white text-opacity-80">
            {project.description}
          </p>
          {/* <div className="relative w-full h-48 object-cover rounded-md overflow-hidden">
            <Image src={project.image} alt={project.title} layout="fill" />
          </div> */}
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, key) => (
              <p
                key={key}
                className="px-1 py-[0.20rem] bg-blueAccent text-sm w-fit rounded-md"
              >
                {tech.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
