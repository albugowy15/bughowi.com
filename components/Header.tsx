/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="text-center flex items-center flex-col justify-center h-screen">
      <h1 className="text-4xl font-bold my-3">
        Hi, I'm <span className="text-blueAccent">Mohamad Kholid Bughowi</span>
      </h1>
      <h1 className="text-4xl font-bold">
        You can call me <span className="bg-blueAccent px-2">Owi</span>
      </h1>
      <p className="my-8 text-xl">
        Passionate in Front End and Android Development. Happy to learn some new
        things and improve another skills in tech
      </p>

      <div className="flex items-center justify-center gap-20 my-20">
        <div className="rounded-sm bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:scale-105 hover:shadow-xl duration-300">
          <button className="flex flex-col justify-between h-full bg-darkSecondary text-white rounded-sm py-1 px-3">
            <Link href="/posts">Read My Posts</Link>
          </button>
        </div>
        <div className="rounded-sm bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:scale-105 hover:shadow-xl duration-300">
          <button className="flex flex-col justify-between h-full bg-darkSecondary text-white rounded-sm py-1 px-3">
            <Link href="/about">About Me</Link>
          </button>
        </div>
      </div>

      <button className="-z-40 animate-bounce duration-500 hover:p-1 hover:rounded-full hover:bg-red-700">
        <MdOutlineKeyboardArrowDown size={30} />
      </button>
    </div>
  );
};

export default Header;
