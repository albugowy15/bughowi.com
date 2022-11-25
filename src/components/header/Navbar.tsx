import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import pp from "@assets/profile-picture.png";

const Navbar = () => {
	const [onTop, setOnTop] = useState(true);
	const router = useRouter();

	function handleScroll() {
		if (onTop !== (window.scrollY === 0)) {
			setOnTop(window.scrollY === 0);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<nav className={`${onTop ? "" : "sm:drop-shadow-md"} p-1 w-full sm:p-0 sticky sm:bg-darkPrimary top-0 z-50`}>
			<div className={`${onTop ? "" : "bg-darkPrimary bg-opacity-95 shadow-black shadow-md rounded-md"} container 2xl:max-w-7xl px-4 mx-auto sm:rounded-none sm:shadow-none`}>
				{/* Navbar on large screen */}
				<div className="flex justify-between items-center py-2">
					<Link href="/">
						<div className="flex items-center justify-start gap-2 cursor-pointer">
							<div className="relative overflow-hidden rounded-full p-4 border-[3px] border-blueAccent object-cover">
								<Image src={pp.src} alt="Bughowi.com" fill className="object-cover" priority />
							</div>

							<h1 className="hidden sm:block font-bold text-2xl">bughowi.com</h1>
						</div>
					</Link>

					<div className="flex justify-end items-center">
						<ul className="flex justify-around gap-1 items-center">
							<li>
								<Link href="/">
									<p
										className={`${router.pathname === "/" ? "text-blue-400 bg-darkSecondary rounded" : ""}
                    font-bold cursor-pointer hover:text-blueAccent hover:bg-darkSecondary hover:rounded transition-colors duration-300 px-1 py-0.5
                    `}
									>
										Home
									</p>
								</Link>
							</li>
							<li>
								<Link href="/blog">
									<p
										className={`${router.pathname === "/blog" || router.pathname === "/blog/[slug]" ? "text-blue-400 bg-darkSecondary rounded" : ""}
                    font-bold cursor-pointer hover:text-blueAccent hover:bg-darkSecondary hover:rounded transition-colors duration-300 px-1 py-0.5
                    `}
									>
										Blog
									</p>
								</Link>
							</li>
							<li>
								<Link href="/projects">
									<p
										className={`${router.pathname === "/projects" || router.pathname === "/projects/[slug]" ? "text-blue-400 bg-darkSecondary rounded" : ""}
                    font-bold cursor-pointer hover:text-blueAccent hover:bg-darkSecondary hover:rounded transition-colors duration-300 px-1 py-0.5
                    `}
									>
										Projects
									</p>
								</Link>
							</li>
							<li>
								<Link href="/about">
									<p
										className={`${router.pathname === "/about" ? "text-blue-400 bg-darkSecondary rounded" : ""}
                    font-bold cursor-pointer hover:text-blueAccent hover:bg-darkSecondary hover:rounded transition-colors duration-300 px-1 py-0.5
                    `}
									>
										About
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
