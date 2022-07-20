import BlogPosts from "components/posts/BlogPosts";
import FeaturedPost from "components/posts/FeaturedPost";
import Categories from "components/sidebar/Categories";
import TopPicks from "components/sidebar/TopPicks";
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
      <FeaturedPost />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-3 my-6">
        <BlogPosts />
        <aside className="flex-1">
          <TopPicks />
          <Categories />
        </aside>
      </div>
    </>
  );
};

export default Blog;
