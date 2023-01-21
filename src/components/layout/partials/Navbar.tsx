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
    <nav className="p-1 w-full sticky top-0 z-50">
      <div className="container 2xl:max-w-7xl px-3 xl:px-14 mx-auto">
        <div
          className={`${
            onTop
              ? ""
              : "bg-darkPrimary bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-black/60 shadow-md rounded-md"
          } px-3`}
        >
          {/* Navbar on large screen */}
          <div className="flex justify-between items-center py-2">
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

            <div className="flex justify-end items-center">
              <ul className="flex justify-around gap-1 items-center">
                <li>
                  <Link href="/">
                    <p
                      className={`${
                        router.pathname === "/"
                          ? "text-blue-400 bg-darkSecondary/60 rounded"
                          : ""
                      }
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
