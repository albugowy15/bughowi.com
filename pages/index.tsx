import type { NextPage } from "next";
import Header from "components/Header";
import RecentPosts from "components/RecentPosts";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <RecentPosts />
    </>
  );
};

export default Home;
