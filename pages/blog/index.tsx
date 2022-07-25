import BlogPosts from "components/posts/BlogPosts";
import FeaturedPost from "components/posts/FeaturedPost";
import Categories from "components/sidebar/Categories";
import TopPicks from "components/sidebar/TopPicks";
import { Post } from "contentlayer/generated";
import { NextPage } from "next";
import Head from "next/head";
import { getAllPosts } from "utils/contents";

const Blog = ({ posts }: { posts: Post[] }) => {
  function getTopPicks() {
    const random = [...posts].sort(() => 0.5 - Math.random());

    return random.slice(0, 3);
  }
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
        <aside className="w-full lg:flex-1 lg:ml-3">
          <TopPicks posts={getTopPicks()} />
          {/* <Categories /> */}
        </aside>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = getAllPosts();
  console.log(posts);
  return {
    props: { posts },
  };
}
