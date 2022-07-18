import HomeProjectCard from "./card/HomeProjectCard";

const DUMMY_PROJECTS = [
  {
    title: "Next.js Blog",
    description: "Understanding SSR and SSG in Next.js by create a blog",
    techStack: ["next.js", "tailwindcss", "javascript", "frontend"],
    slug: "nextjs-blog",
  },
  {
    title: "Viral.in",
    description:
      "An Android App (Kotlin) that display news data from NewsAPI.org.",
    techStack: ["android", "kotlin", "api"],
    slug: "viralin",
  },
  {
    title: "Flutter tuduku",
    description: "A simple to-do-list app built with Flutter and Dart",
    techStack: ["flutter", "mobile", "dart"],
    slug: "flutter-tuduku",
  },
  {
    title: "Endorsin",
    description: "Create dashboard for product endorsement with Laravel",
    techStack: ["laravel", "php", "backend"],
    slug: "endorsin",
  },
];

function PersonalProjects() {
  return (
    <div id="personal-projects" className="my-8">
      <h2 className="text-2xl font-bold">Personal Projects</h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DUMMY_PROJECTS.map((project) => (
          <HomeProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export default PersonalProjects;
