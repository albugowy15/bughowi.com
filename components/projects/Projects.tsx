import Image from "next/image";

const DUMMY_PROJECTS = [
  {
    title: "Next.js Blog",
    image:
      "https://images.unsplash.com/photo-1657827203250-b5ca2f58926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODMwNTgyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Understanding SSR and SSG in Next.js by create a blog",
    techStack: ["next.js", "tailwindcss", "javascript", "frontend"],
    slug: "nextjs-blog",
  },
  {
    title: "Viral.in",
    image:
      "https://images.unsplash.com/photo-1657726565601-1a261a64055c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODMwNTg2MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description:
      "An Android App (Kotlin) that display news data from NewsAPI.org.",
    techStack: ["android", "kotlin", "api"],
    slug: "viralin",
  },
  {
    title: "Flutter tuduku",
    image:
      "https://images.unsplash.com/photo-1657641623667-52dd1e350003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODMwNTkwNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "A simple to-do-list app built with Flutter and Dart",
    techStack: ["flutter", "mobile", "dart"],
    slug: "flutter-tuduku",
  },
  {
    title: "Endorsin",
    image:
      "https://images.unsplash.com/photo-1656998019079-a7f9182c12be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODMwNTk2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Create dashboard for product endorsement with Laravel",
    techStack: ["laravel", "php", "backend"],
    slug: "endorsin",
  },
];

function Projects() {
  return (
    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {DUMMY_PROJECTS.map((project, key) => (
        <div
          key={key}
          className="flex flex-col gap-3 justify-start bg-darkSecondary p-4 border border-white border-opacity-40 rounded-md hover:scale-[1.015] duration-500 ease-in-out cursor-pointer"
        >
          <p className="font-bold text-xl">{project.title}</p>
          <p className="text-sm text-white text-opacity-80">
            {project.description}
          </p>
          <div className="relative w-full h-48 object-cover rounded-md overflow-hidden">
            <Image src={project.image} alt={project.title} layout="fill" />
          </div>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, key) => (
              <p
                key={key}
                className="px-1 py-[0.20rem] bg-blueAccent text-sm w-fit rounded-md"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
