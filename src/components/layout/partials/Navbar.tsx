import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import pp from "@assets/profile-picture.png";
import clsx from "clsx";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const [onTop, setOnTop] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  function handleScroll() {
    if (onTop !== (window.scrollY === 0)) {
      setOnTop(window.scrollY == 0);
    }
    console.log(onTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(onTop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={clsx("p-1 w-full sticky top-0 z-50 bg-darkPrimary/70", {
        "backdrop-filter backdrop-blur-lg border-b border-slate-500/40": !onTop,
      })}
    >
      <div className="container 2xl:max-w-7xl px-3 xl:px-14 mx-auto">
        {/* Navbar on large screen */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center w-full justify-between sm:justify-start sm:gap-4">
            <Link href="/">
              <div className="flex items-center justify-start gap-2 cursor-pointer">
                <div className="relative overflow-hidden rounded-full p-4 border-[3px] border-blueAccent object-cover">
                  <Image
                    src={pp.src}
                    alt="Mohamad Kholid Bughowi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </Link>
            <ul className="flex text-sm sm:text-base gap-1 items-center">
              <li>
                <Link href="/blog">
                  <p
                    className={`${
                      router.pathname === "/blog" ||
                      router.pathname === "/blog/[slug]"
                        ? "text-blue-400 bg-darkSecondary/60 rounded"
                        : ""
                    }
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
                    className={`${
                      router.pathname === "/projects" ||
                      router.pathname === "/projects/[slug]"
                        ? "text-blue-400 bg-darkSecondary/60 rounded"
                        : ""
                    }
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
                    className={`${
                      router.pathname === "/about"
                        ? "text-blue-400 bg-darkSecondary/60 rounded"
                        : ""
                    }
                    font-bold cursor-pointer hover:text-blueAccent hover:bg-darkSecondary hover:rounded transition-colors duration-300 px-1 py-0.5
                    `}
                  >
                    About
                  </p>
                </Link>
              </li>
              <li className="sm:hidden relative">
                <div
                  className="font-bold cursor-pointer px-1.5 py-0.5 bg-darkSecondary rounded-md flex items-center gap-1 text-blue-400"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Connect <AiFillCaretDown />
                </div>
                {showDropdown && (
                  <div className="absolute flex mt-2 flex-col gap-1 rounded-lg bg-darkSecondary p-2 z-50 right-0 shadow-md shadow-slate-800">
                    <a
                      className="flex items-center hover:cursor-pointer text-sm gap-2 hover:bg-darkPrimary py-1 px-2 rounded-lg"
                      href="https://github.com/albugowy15"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="p-1.5 bg-blueAccent/70 rounded-lg">
                        <BsGithub />
                      </div>
                      <p className="font-semibold">albugowy15</p>
                    </a>
                    <a
                      className="flex items-center hover:cursor-pointer text-sm gap-2 hover:bg-darkPrimary py-1 px-2 rounded-lg"
                      href="https://twitter.com/bughowy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="p-1.5 bg-blueAccent/70 rounded-lg">
                        <BsTwitter />
                      </div>
                      <p className="font-semibold">bughowy</p>
                    </a>
                    <a
                      className="flex items-center hover:cursor-pointer text-sm gap-2 hover:bg-darkPrimary py-1 px-2 rounded-lg"
                      href="https://linkedin.com/in/bughowi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="p-1.5 bg-blueAccent/70 rounded-lg">
                        <BsLinkedin />
                      </div>
                      <p className="font-semibold">bughowi</p>
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="sm:flex items-center gap-4 hidden">
            <BsGithub
              className="cursor-pointer hover:text-blue-500 hover:transition-colors hover:duration-300"
              size={20}
              onClick={() =>
                window.open("https://github.com/albugowy15", "_blank")
              }
            />
            <BsTwitter
              className="cursor-pointer hover:text-blue-500 hover:transition-colors hover:duration-300"
              size={20}
              onClick={() =>
                window.open("https://twitter.com/bughowy", "_blank")
              }
            />
            <BsLinkedin
              className="cursor-pointer hover:text-blue-500 hover:transition-colors hover:duration-300"
              onClick={() =>
                window.open("https://linkedin.com/in/bughowi", "_blank")
              }
              size={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
