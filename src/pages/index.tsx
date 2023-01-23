import { Post, Project } from "@contentlayer/generated";
import {
  getAllPosts,
  getAllProjects,
  getNPosts,
  getNProjects,
} from "@utils/contents";
import HomePage from "modules/home/pages/HomePage";

export default function Home({
  posts,
  projects,
}: {
  posts: Post[];
  projects: Project[];
}) {
  return <HomePage posts={posts} projects={projects} />;
}

export async function getStaticProps() {
  const posts = getNPosts(6);
  const projects = getNProjects(6);
  return {
    props: {
      posts,
      projects,
    },
  };
}
