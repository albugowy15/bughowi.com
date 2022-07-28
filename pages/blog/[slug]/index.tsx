import { allPosts } from ".contentlayer/generated";
import { Post } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import formatDate from "utils/formatDate";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getAllPosts } from "utils/contents";
import TopPicks from "components/sidebar/TopPicks";
import Link from "next/link";
import Giscus from "@giscus/react";
import { useThemeStore } from "store/store";

function PostDetail({
  post,
  recentPosts,
}: {
  post: Post;
  recentPosts: Post[];
}) {
  const [giscusTheme, setGiscusTheme] = useState("dark");
  const themes = useThemeStore((state) => state.themes);

  useEffect(() => {
    if (document.querySelector("html")!.classList.contains("dark")) {
      setGiscusTheme("dark");
    } else {
      setGiscusTheme("light");
    }
  }, [giscusTheme, themes]);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{`${post.title} - Blog | bughowi.com`}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="py-10" />

      <main className="w-full lg:w-[65%] mx-auto">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="mt-2 flex justify-start gap-3 items-center text-sm">
          <Link href="/about">
            <p className="hover:text-blueAccent transition-colors">
              By M. K. Bughowi
            </p>
          </Link>
          <span>&#8226;</span>
          <p>{formatDate(post)}</p>
          <span>&#8226;</span>
          <p className="text-yellowAccent">{post.readingTime.text}</p>
        </div>
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
          <div className="border-y-2 mt-3">
            <p className="py-4">
              Categories :{" "}
              {post.categories?.map((category, idx) => (
                <span className="p-1 bg-blueAccent rounded-lg mr-3" key={idx}>
                  {category.toLocaleString()}
                </span>
              ))}
            </p>
          </div>
          <TopPicks posts={recentPosts} />
        </article>
        <div className="py-4" />
        <Giscus
          id="comments"
          repo="albugowy15/bughowi.com"
          repoId="R_kgDOHqneBQ"
          category="Announcements"
          categoryId="DIC_kwDOHqneBc4CQdnP"
          mapping="url"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme={giscusTheme}
          lang="en"
          loading="lazy"
        />
      </main>
    </>
  );
}

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url);

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
