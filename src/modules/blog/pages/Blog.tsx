import PostCard from "@components/card/PostCard";
import OpenGraph from "@components/common/OpenGraph";
import FeaturedPost from "modules/blog/components/FeaturedPost";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import Head from "next/head";
import { Post } from "../../../../.contentlayer/generated";

export default function Blog({
  posts,
  featuredPost,
}: {
  posts: Post[];
  featuredPost: Post;
}) {
  const ogProperties = useOpenGraph({
    url: "https://bughowi.com/blog",
    title: "Blog | Mohamad Kholid Bughowi",
    image: {
      type: "image/png",
      url: "https://user-images.githubusercontent.com/49820990/188320807-8d2143c9-5786-4f4b-bbed-2d4bb32069b9.png",
      alt: "Here I share my thoughts related to Fullstack development topics and programming in general",
    },
    description:
      "Here I share my thoughts related to Fullstack development topics and programming in general",
    type: "website",
    site_name: "Mohamad Kholid Bughowi",
    author: "Mohamad Kholid Bughowi",
  });

  return (
    <>
      <Head>
        <title>Blog - Mohamad Kholid Bughowi</title>
        <meta
          name="description"
          content="Here I share my thoughts related to Fullstack
          development topics and programming in general."
        />
        <OpenGraph properties={ogProperties} />
      </Head>
      <div className="py-4" />
      <h2 className="text-center font-bold text-3xl">Blog</h2>
      <p className="text-center py-3 mb-4 text-lg">
        Welcome to my Blog. Here I share my thoughts related to Fullstack
        development topics and programming in general. I&apos;ve always been a
        fan of writing, and I hope you can find something here that could help
        you in your developer career.
      </p>
      <FeaturedPost post={featuredPost} />
      {/* <div className="flex flex-col lg:flex-row items-start justify-between gap-3 my-6"> */}
      <div className="py-5" />
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, key) => (
          <PostCard key={key} {...post} />
        ))}
      </section>
    </>
  );
}
