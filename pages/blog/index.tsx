import FeaturedPost from "components/posts/FeaturedPost";
import { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>bughowi.com - Blog</title>
        <meta
          name="description"
          content="Some of article of Front End Development topics"
        />
      </Head>
      <div className="py-10" />
      <main>
        <FeaturedPost />
      </main>
    </>
  );
};

export default Blog;
