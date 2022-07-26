/* eslint-disable react/no-unescaped-entities */
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import OutlineGradientButton from "../button/OutlineGradientButton";

const Intro = () => {
  return (
    <div className="text-center py-20 flex items-center flex-col justify-between h-screen">
      <div className="py-10" />
      <div>
        <p className="text-3xl sm:text-5xl font-black my-3">
          Hi <span className="animate-wave">&#128075;</span> I'm{" "}
          <span className="text-blueAccent">Mohamad Kholid Bughowi</span>
        </p>
        <p className="text-3xl sm:text-5xl font-black">
          You can call me{" "}
          <span className="bg-blueAccent px-2 text-white">Owi</span>
        </p>
        <p className="my-8 text-xl max-w-xl mx-auto">
          Passionate in Front End and Android Development. Happy to learn some
          new things and improve another skills in tech
        </p>

        <div className="flex items-center justify-center sm:gap-16 gap-2 my-20">
          <OutlineGradientButton url="/blog" title="Read My Posts" />
          <OutlineGradientButton url="/about" title="About Me" />
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

export default Intro;
