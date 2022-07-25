import { allPosts } from ".contentlayer/generated";
import { Post } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import formatDate from "utils/formatDate";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getAllPosts } from "utils/contents";
import TopPicks from "components/sidebar/TopPicks";

function PostDetail({
  post,
  recentPosts,
}: {
  post: Post;
  recentPosts: Post[];
}) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <Head>
        <title>Post Title</title>
        <meta name="description" content="Ini adalah title untuk post" />
      </Head>
      <div className="py-10" />
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-4 flex justify-start gap-3 items-center text-xs">
        <p>By M. K. Bughowi</p>
        <span>&#8226;</span>
        <p>{formatDate(post)}</p>
        <span>&#8226;</span>
        <p className="text-yellowAccent">{post.readingTime.text}</p>
      </div>
      <main className="flex flex-col lg:flex-row gap-3 lg:gap-5">
        <section className="w-full lg:w-[60%]">
          <article className="mt-5 w-full">
            <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden object-cover relative">
              <Image
                src={post.thumbnail}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div id="content-space" className="py-3">
              <MDXContent />
            </div>
          </article>
        </section>
        <aside className="lg:flex-1 sticky h-full top-14">
          <TopPicks posts={recentPosts} />
        </aside>
      </main>
    </>
  );
}

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url);
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = allPosts.find(
    (post) => post.url === `/blog/${context.params?.slug}`
  );

  const recentPosts = getAllPosts().slice(0, 4);
  return {
    props: {
      post: post,
      recentPosts: recentPosts,
    },
  };
};
