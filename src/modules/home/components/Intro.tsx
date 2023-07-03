/* eslint-disable react/no-unescaped-entities */
import OutlineGradientButton from "modules/home/components/OutlineGradientButton";
import Image from "next/image";
import profpic from "@assets/profile-picture.png";
import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi";
import Typography from "@components/Typography";

const Intro = () => {
  return (
    <section className="flex items-center justify-between min-h-screen md:min-h-fit md:my-28">
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <p className="text-4xl lg:text-4xl font-black py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600  to-blue-400">
          Mohamad Kholid Bughowi
        </p>
        <Typography variant="h3" className="py-2">
          Fullstack Developer
        </Typography>
        <Typography variant="body1">
          Full Stack Developer with a passion for creating innovative web apps.
          Proficient in TypeScript, Go, and Rust, dedicated to seamless user
          experiences. Follow my blog for dev insights and projects.
        </Typography>
        <div className="py-5" />
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Link
            className="bg-darkSecondary px-4 py-1.5 rounded-lg border-2 border-slate-700 font-bold hover:text-blue-400 hover:bg-opacity-0 transition-all duration-300"
            href="/about"
          >
            More About Me
          </Link>
          <a
            className="flex items-center font-bold px-4 rounded-lg gap-1 border-2 py-1.5 border-slate-700 hover:text-blue-400 hover:bg-darkSecondary cursor-pointer transition-all duration-300"
            href="https://drive.google.com/file/d/1EPMnzARWJv39T32GNm8Ktb-HL66kCBDw/view?usp=share_link"
            rel="noreferrer"
            target="_blank"
          >
            <HiOutlineNewspaper /> Resume
          </a>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="absolute -inset-2 bg-blue-800/20 rounded-full blur-3xl" />
        <Image
          src={profpic}
          alt="Mohamad Kholid Bughowi"
          className="object-cover rounded-full h-64 w-64 relative overflow-hidden flex-none"
        />
      </div>
    </section>
  );
};

export default Intro;
