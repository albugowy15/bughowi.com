import OpenGraph from "@components/common/OpenGraph";
import Intro from "modules/home/components/Intro";
import RecentPosts from "modules/blog/components/RecentPosts";
import PersonalProjects from "modules/project/components/PersonalProjects";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import Head from "next/head";
import { Post, Project } from "../../../../.contentlayer/generated";

const HomePage = ({
  posts,
  projects,
}: {
  posts: Post[];
  projects: Project[];
}) => {
  const ogProperties = useOpenGraph({
    url: "https://bughowi.com",
    title: "Mohamad Kholid Bughowi - Fullstack Developer",
    image: {
      type: "image/png",
      url: "https://user-images.githubusercontent.com/49820990/188320807-8d2143c9-5786-4f4b-bbed-2d4bb32069b9.png",
      alt: "Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences.",
    },
    description:
      "Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences",
    type: "website",
    site_name: "Mohamad Kholid Bughowi",
    author: "Mohamad Kholid Bughowi",
  });
  return (
    <>
      <Head>
        <title>Mohamad Kholid Bughowi - Fullstack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences."
        />

        <OpenGraph properties={ogProperties} />
      </Head>
      <Intro />
      <RecentPosts posts={posts} />
      <div className="py-4" />
      <PersonalProjects projects={projects} />
    </>
  );
};

export default HomePage;
