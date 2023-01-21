/* eslint-disable react/no-unescaped-entities */
import OutlineGradientButton from "modules/home/components/OutlineGradientButton";

const Intro = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <div>
        <p className="text-2xl sm:text-4xl font-black my-3">
          Hi <span>&#128075;</span> I'm{" "}
          <span className="text-blueAccent">Mohamad Kholid Bughowi</span>
        </p>
        <p className="text-2xl sm:text-4xl font-black">
          You can call me{" "}
          <span className="bg-blueAccent px-2 text-white">Owi</span>
        </p>
        <p className="my-8 sm:text-lg max-w-xl mx-auto">
          Full Stack Developer with a passion for creating innovative web apps.
          Proficient in TypeScript and Go, dedicated to seamless user
          experiences. Follow my blog for dev insights and projects.
        </p>

        <div className="flex items-center justify-center sm:gap-16 gap-2 my-20">
          <OutlineGradientButton url="/blog" title="Read My Posts" />
          <OutlineGradientButton url="/about" title="About Me" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
