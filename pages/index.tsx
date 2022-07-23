import type { NextPage } from "next";
import Intro from "components/intro/Intro";
import RecentPosts from "components/posts/RecentPosts";
import PersonalProjects from "components/projects/PersonalProjects";
import Head from "next/head";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Home: NextPage = () => {
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
      <RecentPosts />
      <PersonalProjects />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
