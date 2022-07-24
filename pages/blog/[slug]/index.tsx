import { allPosts } from ".contentlayer/generated";
import { Post } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

function PostDetail({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>Post Title</title>
        <meta name="description" content="Ini adalah title untuk post" />
      </Head>
      <div className="py-10" />
      <h1>{post?.title}</h1>
      <section>
        <article></article>
      </section>
      <aside></aside>
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
  return {
    props: {
      post: post,
    },
  };
};
