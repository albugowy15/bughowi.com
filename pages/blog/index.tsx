import BlogPosts from "components/posts/BlogPosts";
import FeaturedPost from "components/posts/FeaturedPost";
import { Post } from "contentlayer/generated";
import Head from "next/head";
import { getAllPosts } from "utils/contents";

const Blog = ({
  posts,
  featuredPost,
}: {
  posts: Post[];
  featuredPost: Post;
}) => {
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
      <h1 className="text-center font-bold text-3xl">Blog</h1>
      <p className="text-center py-3 mb-4">
        Welcome to my Blog. Here I share my thoughts related to front end
        development topics and programming in general. I&apos;ve always been a
        fan of writing, and I hope you can find something here that could help
        you in your developer career.
      </p>
      <FeaturedPost post={featuredPost} />
      {/* <div className="flex flex-col lg:flex-row items-start justify-between gap-3 my-6"> */}
      <div className="py-5" />
      <BlogPosts posts={posts} />
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.isFeatured === true);
  return {
    props: { posts, featuredPost },
  };
}
