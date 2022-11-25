import Head from "next/head";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import useOpenGraph from "@hooks/useOpenGraph";
import OpenGraph from "@components/common/OpenGraph";

function AboutPage() {
	const ogProperties = useOpenGraph({
		url: "https://www.bughowi.com/about",
		title: "About | bughowi.com",
		image: {
			type: "image/png",
			url: "https://user-images.githubusercontent.com/49820990/188320807-8d2143c9-5786-4f4b-bbed-2d4bb32069b9.png",
			alt: "Know more about me",
		},
		description: "Know more about me",
		type: "website",
		site_name: "Bughowi.com",
		author: "Mohamad Kholid Bughowi",
	});

	return (
		<>
			<Head>
				<title>About - bughowi.com</title>
				<meta name="description" content="Know more about me" />

				<OpenGraph properties={ogProperties} />
			</Head>
			<div className="py-4" />
			<motion.div
				initial={{ y: 2000, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "tween",
					duration: 1,
				}}
			>
				<h1 className="font-bold text-4xl text-center">About Me</h1>
				<div id="content-space" className="py-3 w-full lg:w-[65%] mx-auto">
					<h2 className="font-bold text-3xl">Introduction</h2>
					<p>
						Hello! &#128075; I&apos;m <span className="font-bold text-yellowAccent">Owi</span>. I&apos;m a Computer Science student - Web & Android Developer from Jepara, Indonesia.
					</p>
					<p>
						I have been learning some basic of Web Programming since high school by creating a blog using CMS likes Wordpress and Blogger. But I didn&apos;t design it myself. Instead I was just download some free Wordpress or Blogger
						template on the internet then I modified it a little bit.
					</p>
					<p>
						I started digging more about Web Development stuff during my college. Start by learn Javascript and PHP, then continue using some popular framework such as React.js, Next.js and Laravel. At the end I prefer to choose JavaScript
						as my favorite language to build a website.
					</p>
					<p>
						I created this website for two main reasons. The first one is to showcase and share all the things I&apos;ve learned during my journey, and who knows?, maybe help others, that like me are learning. The second reason is, I always
						like to learn new things. So, I wanted this website to be the place where I can put in practice all the new things I just learn.
					</p>
					<h2 className="font-bold text-3xl pt-3">Tech Stack</h2>
					<p>I&apos;m currently enjoy build website using TypeScript, Next.js, and Tailwind CSS.</p>
					<h3 className="font-bold text-xl pt-2">
						<span className="mr-2">
							<SiTypescript className="inline" />
						</span>
						TypeScript
					</h3>
					<p>
						TypeScript allows you to write JavaScript in a way that’s right for you. It is basically a JavaScript typed superset that collates to raw JavaScript. The choice of TypeScript over JavaScript make me possible to remove certain
						anomalies earlier during the development phase and secure the code before going into production.
					</p>
					<h3 className="font-bold text-xl pt-2">
						<span className="mr-2">
							<SiNextdotjs className="inline" />
						</span>
						Next.js
					</h3>
					<p>
						Using Next.js is make me easier to handle page routing with Next.js File system routing feature. The data fetching (SSG, SSR, ISR) is also powerful feature that I really love to use it in Next.js. But possibly I will learn
						another Javascript framework such as Angular or Vue.js in the future.
					</p>
					<h3 className="font-bold text-xl pt-2">
						<span className="mr-2">
							<SiTailwindcss className="inline" />
						</span>
						Tailwind
					</h3>
					<p>And for CSS framework, I will never switch to another CSS framework because Tailwind is really awesome. And I couldn&apos;t imagine how I build a website without Tailwind.</p>
					<h2 className="font-bold text-3xl pt-3">Contact Me</h2>
					<p>If you want to contact me, go ahead and send me a message through my email and social media below. I&apos;ll be happy to receive your feedback.</p>
					<div className="text-base sm:text-lg p-4 rounded border-gray-800 w-fit flex flex-wrap justify-center gap-2 sm:gap-5">
						<div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
							<FaEnvelope />
							<p>
								<a href="mailto:kholidbughowi@gmail.com" target="_blank" rel="noreferrer">
									kholidbughowi@gmail.com
								</a>
							</p>
						</div>
						<div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
							<FaLinkedin className="text-blue-600" />
							<p>
								<a href="https://linkedin.com/in/bughowi/" target="_blank" rel="noreferrer">
									Mohamad Kholid Bughowi
								</a>
							</p>
						</div>
						<div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
							<FaTwitter className="text-sky-500" />
							<p>
								<a href="https://twitter.com/bughowy/" target="_blank" rel="noreferrer">
									bughowy
								</a>
							</p>
						</div>
						<div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
							<FaInstagram className="text-pink-500" />
							<p>
								<a href="https://instagram.com/muhammad_bughowy/" target="_blank" rel="noreferrer">
									muhammad_bughowy
								</a>
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default AboutPage;
