import NextImage from "@components/common/NextImage";
import OpenGraph from "@components/common/OpenGraph";
import Giscus from "@giscus/react";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import { formatDate } from "@utils/contents";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Credit, { CreditProps } from "@components/card/Credit";
import clsx from "clsx";
import { Post } from "../../../../.contentlayer/generated";

const components = {
	img: NextImage,
	CreditBadge: ({ username, img, url }: CreditProps) => <Credit img={img} username={username} url={url} />,
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
		site_name: "Bughowi.com",
	});

	return (
		<>
			<Head>
				<title>{`${post.title} - Blog | bughowi.com`}</title>
				<meta name='description' content={post.description} />

				<OpenGraph properties={ogProperties} />
			</Head>
			<div className='py-4' />

			<h1 className='text-3xl font-bold'>{post.title}</h1>
			<div className='mt-2 text-sm flex justify-start gap-1 sm:gap-3 items-center mb-6'>
				<Link href='/about'>
					<p className='hover:text-blueAccent transition-colors'>M. K. Bughowi</p>
				</Link>
				<span>&#8226;</span>
				<p>{formatDate(post)}</p>
				<span>&#8226;</span>
				<p className='text-yellowAccent'>{post.readingTime.text}</p>
			</div>
			<main className='w-full mx-auto xl:flex xl:justify-between xl:gap-10 xl:items-start'>
				<div className='xl:w-[70%]'>
					<article className='w-full'>
						<Image src={post.thumbnail} alt={post.title} width={900} height={350} className='object-cover rounded-md' />

						<div id='content-space' className='py-3'>
							{/* @ts-ignore */}
							<MDXContent components={components} />
						</div>
						<div className='border-y-2 border-slate-400 mt-3'>
							<p className='py-4 flex flex-wrap items-center gap-2'>
								Categories :{" "}
								{post.categories?.map((category, idx) => (
									<span className='px-1 py-0.5 bg-blueAccent text-slate-100 rounded-md' key={idx}>
										{category.name}
									</span>
								))}
							</p>
						</div>
					</article>
					<div className='py-4' />
					<Giscus
						id='comments'
						repo='albugowy15/bughowi.com'
						repoId='R_kgDOHqneBQ'
						category='Announcements'
						categoryId='DIC_kwDOHqneBc4CQdnP'
						mapping='url'
						strict='0'
						reactionsEnabled='0'
						emitMetadata='0'
						inputPosition='bottom'
						theme='dark'
						lang='en'
						loading='lazy'
					/>
				</div>
				<div className='hidden xl:block sticky flex-1 top-20 z-40'>
					<h3 className='font-bold text-xl'>Table of Contents</h3>

					{post.headings.map((heading: any) => {
						return (
							<div key={heading.slug}>
								<a
									href={`#${heading.slug}`}
									className={clsx("block text-slate-200/80 underline-offset-2 transition-all hover:text-slate-100 hover:underline hover:decoration-slate-100", {
										"pl-4": heading.heading === 3,
										"pl-6": heading.heading === 4,
									})}
								>
									{heading.text}
								</a>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
}
