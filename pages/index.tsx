import type { NextPage } from "next";
import Header from "components/Header";
import RecentPosts from "components/RecentPosts";
import PersonalProjects from "components/PersonalProjects";
import Subscribe from "components/subscribe/Subscribe";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <RecentPosts />
      <PersonalProjects />
      <Subscribe />
    </>
  );
};

export default Home;
