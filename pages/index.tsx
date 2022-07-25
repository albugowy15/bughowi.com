import Intro from "components/intro/Intro";
import RecentPosts from "components/posts/RecentPosts";
import PersonalProjects from "components/projects/PersonalProjects";
import Head from "next/head";
import { Post } from "contentlayer/generated";
import { getAllPosts } from "utils/contents";

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>bughowi.com - Home</title>
        <meta
          name="description"
          content="A personal blog to showcase my projects and some articles in Front End Development fields"
        />
      </Head>
      <Intro />
      <RecentPosts posts={posts} />
      <PersonalProjects />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
