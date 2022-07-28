import Intro from "components/intro/Intro";
import RecentPosts from "components/posts/RecentPosts";
import PersonalProjects from "components/projects/PersonalProjects";
import Head from "next/head";
import { Post, Project } from "contentlayer/generated";
import { getAllPosts, getAllProjects } from "utils/contents";

const Home = ({ posts, projects }: { posts: Post[]; projects: Project[] }) => {
  return (
    <>
      <Head>
        <title>Home - bughowi.com</title>
        <meta
          name="description"
          content="A personal blog to showcase projects and some articles in Wed Development fields"
        />
      </Head>
      <Intro />
      <RecentPosts posts={posts} />
      <PersonalProjects projects={projects} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  return {
    props: {
      posts,
      projects,
    },
  };
}
