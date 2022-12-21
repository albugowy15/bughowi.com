import Giscus from "@giscus/react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import { Project } from "../../../../.contentlayer/generated";
import { motion } from "framer-motion";

export default function ProjectDetail({ project }: { project: Project }) {
	const MDXContent = useMDXComponent(project.body.code);

	return (
		<>
			<Head>
				<title>{`${project.title} - Projects | bughowi.com`}</title>
				<meta name="description" content={project.description} />
			</Head>
			<div className="py-4" />

			<motion.main
				initial={{ y: 2000, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "tween",
					duration: 1,
				}}
				className="w-full lg:w-[65%] mx-auto"
			>
				<h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
				<p className="text-slate-400">{project.description}</p>
				<article className="mt-5 w-full">
					{project.thumbnail && (
						<div className="w-full h-72 md:h-96 rounded-lg overflow-hidden object-cover relative">
							<Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
						</div>
					)}

					<div id="content-space" className="py-3">
						<MDXContent />
					</div>
					<div className="border-y-2 border-slate-400 mt-3 text-lg">
						<p className="py-4 flex flex-wrap items-center gap-2">
							Tech Stack :{" "}
							{project.techStack?.map((tech, idx) => (
								<span className="p-0.5 text-lg bg-blueAccent text-slate-100 rounded-lg" key={idx}>
									{tech.name}
								</span>
							))}
						</p>
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
					theme="dark"
					lang="en"
					loading="lazy"
				/>
			</motion.main>
		</>
	);
}
