/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="text-center py-20 flex items-center flex-col justify-between h-screen">
      <div>
        <h1 className="text-3xl sm:text-5xl font-black my-3">
          Hi, I'm{" "}
          <span className="text-blueAccent">Mohamad Kholid Bughowi</span>
        </h1>
        <h1 className="text-3xl sm:text-5xl font-black">
          You can call me <span className="bg-blueAccent px-2">Owi</span>
        </h1>
        <p className="my-8 text-xl">
          Passionate in Front End and Android Development. Happy to learn some
          new things and improve another skills in tech
        </p>

        <div className="flex items-center justify-center sm:gap-16 gap-2 my-20">
          <Link href="/blog">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 font-bold">
              <span className="absolute h-full w-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"></span>
              <span className="duration-400 relative rounded-md bg-darkPrimary px-4 py-3 transition-all ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">Read My Posts</span>
              </span>
            </button>
          </Link>
          <Link href="/about">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 font-bold">
              <span className="absolute h-full w-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"></span>
              <span className="duration-400 relative rounded-md bg-darkPrimary px-4 py-3 transition-all ease-out group-hover:bg-opacity-0">
                <span className="relative text-white">About Me</span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div>
        <p className="font-bold mb-2">Scroll Down!</p>
        <button className="animate-bounce z-0">
          <a href="#recent-posts">
            <MdOutlineKeyboardArrowDown size={30} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
