import NextImage from "@components/common/NextImage";
import OpenGraph from "@components/common/OpenGraph";
import Giscus from "@giscus/react";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import { formatDate } from "@utils/contents";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../../.contentlayer/generated";

const components = {
	img: NextImage,
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

			<main className='w-full lg:w-[65%] mx-auto'>
				<h1 className='text-4xl font-bold'>{post.title}</h1>
				<div className='mt-2 flex justify-start gap-1 sm:gap-3 items-center text-base'>
					<Link href='/about'>
						<p className='hover:text-blueAccent transition-colors'>M. K. Bughowi</p>
					</Link>
					<span>&#8226;</span>
					<p>{formatDate(post)}</p>
					<span>&#8226;</span>
					<p className='text-yellowAccent'>{post.readingTime.text}</p>
				</div>
				<article className='mt-5 w-full'>
					<Image src={post.thumbnail} alt={post.title} width={800} height={300} className='object-cover' />

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
			</main>
		</>
	);
}
