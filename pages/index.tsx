import type { NextPage } from "next";
import Intro from "components/intro/Intro";
import RecentPosts from "components/posts/RecentPosts";
import PersonalProjects from "components/projects/PersonalProjects";
import Subscribe from "components/subscribe/Subscribe";
import Head from "next/head";

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
      <Subscribe />
    </>
  );
};

export default Home;
