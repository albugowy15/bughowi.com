import Link from "next/link";
import { useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineSwitcher,
} from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineClose } from "react-icons/md";
import { BsBook, BsSun, BsMoon } from "react-icons/bs";
import FillButton from "../button/FillButton";
import NavbarSocialMedia from "../social-media/NavbarSocialMedia";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);

  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className="w-screen fixed bg-darkPrimary drop-shadow-md z-50">
      <div className="container px-4 mx-auto">
        {/* Navbar on large screen */}
        <div className="flex justify-between items-center py-2">
          <Link href="/">
            <div className="flex items-center justify-start gap-1 cursor-pointer">
              <TbBrandNextjs size={35} />

              <p className="font-bold text-xl">bughowi.dev</p>
            </div>
          </Link>

          <div className="hidden sm:flex sm:justify-end sm:items-center">
            <ul className="flex justify-around gap-3">
              <li>
                <Link href="/">
                  <p
                    className={
                      router.pathname === "/"
                        ? "font-bold cursor-pointer text-blueAccent"
                        : "font-bold cursor-pointer hover:text-blueAccent transition-colors duration-300"
                    }
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p
                    className={
                      router.pathname === "/blog" ||
                      router.pathname === "/blog/[slug]"
                        ? "font-bold cursor-pointer text-blueAccent"
                        : "font-bold cursor-pointer hover:text-blueAccent transition-colors duration-300"
                    }
                  >
                    Blog
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p
                    className={
                      router.pathname === "/projects" ||
                      router.pathname === "/projects/[slug]"
                        ? "font-bold cursor-pointer text-blueAccent"
                        : "font-bold cursor-pointer hover:text-blueAccent transition-colors duration-300"
                    }
                  >
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p
                    className={
                      router.pathname === "/about"
                        ? "font-bold cursor-pointer text-blueAccent"
                        : "font-bold cursor-pointer hover:text-blueAccent transition-colors duration-300"
                    }
                  >
                    About
                  </p>
                </Link>
              </li>
            </ul>
            <div
              className="rounded-md border border-white p-2 ml-4 cursor-pointer"
              onClick={() => setTheme(!theme)}
            >
              {theme ? <BsMoon /> : <BsSun />}
            </div>
          </div>
          <div className="sm:hidden block">
            <AiOutlineMenu
              className="cursor-pointer"
              onClick={() => setNav(!nav)}
              size={20}
            />
          </div>
        </div>
        {/* End here */}

        {/* Navbar small screnn using icon bar */}
        <div
          className={
            nav
              ? "fixed w-screen h-screen left-0 top-0 bg-darkPrimary z-50 p-10"
              : "hidden"
          }
        >
          <div className="flex justify-between items-center mb-5">
            <p className="text-xl font-bold text-slate-300">bughowi.dev</p>
            <button
              className="bg-darkSecondary p-3 rounded-full hover:scale-105 duration-300"
              onClick={() => setNav(!nav)}
            >
              <MdOutlineClose size={20} />
            </button>
          </div>
          <div className="text-slate-300">
            <div className="flex items-center gap-4 py-2 cursor-pointer">
              <AiOutlineHome size={20} />
              <Link href="/">
                <p
                  onClick={() => setNav(!nav)}
                  className="text-lg hover:border-b"
                >
                  Home
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-4 py-2 cursor-pointer">
              <BsBook size={20} />
              <Link href="/blog">
                <p
                  onClick={() => setNav(!nav)}
                  className="text-lg hover:border-b"
                >
                  Blog
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-4 py-2 cursor-pointer">
              <AiOutlineProject size={20} />
              <Link href="/projects">
                <p
                  onClick={() => setNav(!nav)}
                  className="text-lg hover:border-b"
                >
                  Projects
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-4 py-2 cursor-pointer">
              <MdOutlineAccountCircle size={20} />
              <Link href="/about">
                <p
                  onClick={() => setNav(!nav)}
                  className="text-lg hover:border-b"
                >
                  About
                </p>
              </Link>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex gap-4 items-center justify-start cursor-pointer">
                <AiOutlineSwitcher size={20} />
                <p className="text-lg hover:border-b">Theme</p>
              </div>
              <div
                className="rounded-md border border-white p-1 cursor-pointer"
                onClick={() => setTheme(!theme)}
              >
                {theme ? <BsMoon /> : <BsSun />}
              </div>
            </div>
          </div>
          <FillButton url="#subscribe" title="FOLLOW" />
          <div className="flex items-center justify-start gap-4 my-4">
            <NavbarSocialMedia />
          </div>
        </div>
        {/* End Here */}
      </div>
    </nav>
  );
};

export default Navbar;
