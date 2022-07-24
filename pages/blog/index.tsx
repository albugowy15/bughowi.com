import BlogPosts from "components/posts/BlogPosts";
import FeaturedPost from "components/posts/FeaturedPost";
import Categories from "components/sidebar/Categories";
import TopPicks from "components/sidebar/TopPicks";
import { Post } from "contentlayer/generated";
import { NextPage } from "next";
import Head from "next/head";
import getAllPosts from "utils/getAllPosts";

const Blog = ({ posts }: { posts: Post[] }) => {
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
      <FeaturedPost posts={posts} />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-3 my-6">
        <BlogPosts posts={posts} />
        <aside className="flex-1 lg:ml-3">
          <TopPicks />
          <Categories />
        </aside>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
