import Credit, { CreditProps } from "@components/card/Credit";
import Giscus from "@giscus/react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import { Project } from "../../../../.contentlayer/generated";

const components = {
	CreditBadge: ({ username, img, url }: CreditProps) => <Credit img={img} username={username} url={url} />,
};

export default function ProjectDetail({ project }: { project: Project }) {
	const MDXContent = useMDXComponent(project.body.code);

	return (
		<>
			<Head>
				<title>{`${project.title} - Projects | bughowi.com`}</title>
				<meta name='description' content={project.description} />
			</Head>
			<div className='py-4' />

			<main className='w-full lg:w-[65%] mx-auto'>
				<h1 className='text-3xl sm:text-4xl font-bold'>{project.title}</h1>
				<p className='text-slate-400'>{project.description}</p>
				<article className='mt-5 w-full'>
					{project.thumbnail && <Image src={project.thumbnail} alt={project.title} height={300} width={800} className='rounded-lg' />}

					<div id='content-space' className='py-3'>
						<MDXContent components={components} />
					</div>
					<div className='border-y-2 border-slate-400 mt-3'>
						<p className='py-4 flex flex-wrap items-center gap-2'>
							Tech Stack :{" "}
							{project.techStack?.map((tech, idx) => (
								<span className='py-0.5 px-1 bg-blueAccent text-slate-100 rounded-md' key={idx}>
									{tech.name}
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
