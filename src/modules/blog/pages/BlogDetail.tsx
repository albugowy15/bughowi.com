import NextImage from "@components/common/NextImage";
import OpenGraph from "@components/common/OpenGraph";
import Giscus from "@giscus/react";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import { formatDate } from "@utils/contents";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Credit, { CreditProps } from "@components/card/Credit";
import clsx from "clsx";
import { Post } from "@contentlayer/generated";
import { BsTwitter } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import CustomImage from "@components/common/CustomImage";

const components = {
  img: NextImage,
  CreditBadge: ({ username, img, url }: CreditProps) => (
    <Credit img={img} username={username} url={url} />
  ),
  CustomImage: CustomImage,
};
export default function BlogDetail({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  const ogProperties = useOpenGraph({
    url: "https://www.bughowi.com" + post.url,
    title: post.title,
    image: {
      type: "image/png",
      url: post.thumbnail,
      alt: post.description,
    },
    description: post.description,
    type: "article",
    author: "Mohamad Kholid Bughowi",
    section: "Blog Posts",
    modified_time: post.date,
    published_time: post.date,
    site_name: "Mohamad Kholid Bughowi",
  });

  const editUrl = `https://github.com/albugowy15/bughowi.com/blob/main/src/contents${post.url}.mdx`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${post.title}&url=https://bughowi.com${post.url}&via=bughowy`;

  return (
    <>
      <Head>
        <title>{`${post.title} - Mohamad Kholid Bughowi`}</title>
        <meta name="description" content={post.description} />

        <OpenGraph properties={ogProperties} />
      </Head>
      <div className="py-4" />

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-2 text-sm flex justify-start gap-1 sm:gap-3 items-center mb-6">
        <Link href="/about">
          <p className="hover:text-blueAccent transition-colors">
            M. K. Bughowi
          </p>
        </Link>
        <span>&#8226;</span>
        <p>{formatDate(post)}</p>
        <span>&#8226;</span>
        <p className="text-yellowAccent">{post.readingTime.text}</p>
      </div>
      <main className="w-full mx-auto xl:flex xl:justify-between xl:gap-10 xl:items-start">
        <div className="xl:w-[70%]">
          <article className="w-full">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={900}
              height={350}
              className="object-cover rounded-md"
            />

            <div id="content-space" className="py-3">
              {/* @ts-ignore */}
              <MDXContent components={components} />
            </div>
            <div className="flex justify-between mt-6">
              <a
                href={editUrl}
                className="px-4 rounded hover:bg-darkSecondary transition-colors py-1 border border-slate-700 flex items-center gap-2 font-semibold"
              >
                <FaRegEdit color="#84DCCF" />
                Edit this page
              </a>
              <a
                href={tweetUrl}
                className="px-4 rounded hover:bg-darkSecondary transition-colors py-1 border border-slate-700 flex items-center gap-2 font-semibold"
              >
                <BsTwitter color="#1DA1F2" />
                Tweet this article
              </a>
            </div>
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
            theme="transparent_dark"
            lang="en"
            loading="lazy"
          />
        </div>
        <div className="hidden xl:flex flex-col divide-y divide-slate-600 bg-darkSecondary/50 rounded-lg sticky flex-1 top-20 z-40 border-2 border-slate-700">
          <div className="flex justify-between px-3 py-2 items-center">
            <h3 className="font-bold">Table of Contents</h3>
            <p
              className="text-sm text-blue-300 cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Back to top
            </p>
          </div>
          <div className="py-2" id="toc-container">
            {post.headings.map((heading: any, index: number) => {
              return (
                <div key={heading.slug}>
                  <a
                    href={`#${heading.slug}`}
                    className={clsx(
                      "block text-slate-200/80 font-semibold text-sm py-1.5 px-3",
                      {
                        "pl-6": heading.heading === 3,
                        "pl-9": heading.heading === 4,
                      },
                      "hover:bg-darkSecondary"
                    )}
                  >
                    {heading.text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
