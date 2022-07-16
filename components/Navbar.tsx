import Link from "next/link";
import { useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineSwitcher,
} from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineClose } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsBook, BsSun, BsMoon } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);
  return (
    <div className="w-screen">
      <div className="container px-3 mx-auto">
        {/* Navbar on large screen */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center justify-start gap-1 cursor-pointer">
            <Link href="/">
              <TbBrandNextjs size={35} />
            </Link>
            <Link href="/">
              <p className="font-bold text-xl">bughowi.dev</p>
            </Link>
          </div>

          <div className="hidden sm:flex sm:justify-end sm:items-center">
            <ul className="flex justify-around gap-3">
              <li className="">
                <Link href="/">
                  <p className="hover:bg-clip-text hover:bg-gradient-to-r hover:from-redAccent hover:via-yellowAccent hover:to-blueAccent hover:text-transparent hover:cursor-pointer">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
            <div
              className="rounded-md border border-white p-2 ml-4 cursor-pointer"
              onClick={() => setTheme(!theme)}
            >
              {theme ? <BsMoon /> : <BsSun />}
            </div>
            <div></div>
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
              ? "fixed flex w-screen h-screen left-0 top-0 bg-black bg-opacity-60 z-40"
              : "hidden"
          }
        >
          <div className="bg-darkPrimary w-[70%] p-5 z-50">
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
                  <p className="text-lg hover:border-b">Home</p>
                </Link>
              </div>
              <div className="flex items-center gap-4 py-2 cursor-pointer">
                <BsBook size={20} />
                <Link href="/blog">
                  <p className="text-lg hover:border-b">Blog</p>
                </Link>
              </div>
              <div className="flex items-center gap-4 py-2 cursor-pointer">
                <AiOutlineProject size={20} />
                <Link href="/projects">
                  <p className="text-lg hover:border-b">Projects</p>
                </Link>
              </div>
              <div className="flex items-center gap-4 py-2 cursor-pointer">
                <MdOutlineAccountCircle size={20} />
                <Link href="/about">
                  <p className="text-lg hover:border-b">About</p>
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
            <a href="#subscribe" className="text-center block bg-blueAccent py-3 px-10 rounded-lg my-4 w-full tracking-widest font-bold hover:bg-blue-800 transition-colors duration-500">
              FOLLOW
            </a>
            <div className="flex items-center justify-start gap-4 my-4">
              <a
                href="https://facebook.com/muhammad.bugowy/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-600 transition-colors ease-linear"
              >
                <AiFillFacebook size={25} />
              </a>
              <a
                href="https://twitter.com/bughowy"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-colors ease-linear"
              >
                <AiFillTwitterSquare size={25} />
              </a>
              <a
                href="https://instagram.com/muhammad_bughowy"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-pink-600 transition-colors ease-linear"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://github.com/albugowy15"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-slate-700 transition-colors ease-linear"
              >
                <AiFillGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/bughowi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-800 transition-colors ease-linear"
              >
                <AiFillLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>
        {/* End Here */}

      </div>
    </div>
  );
};

export default Navbar;
