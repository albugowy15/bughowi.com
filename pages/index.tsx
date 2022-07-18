import type { NextPage } from "next";
import Header from "components/Header";
import RecentPosts from "components/RecentPosts";
import PersonalProjects from "components/PersonalProjects";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <RecentPosts />
      <PersonalProjects />
    </>
  );
};

export default Home;
