import SocialMedia from "./SocialMedia";

const Subscribe = () => {
  return (
    <footer className="text-center mx-auto p-5 w-full">
      <h2 className="font-bold text-2xl">Stay in the Loop</h2>
      <p className="text-lg py-4">
        Subscribe to my newsletter for all the latest update
      </p>
      <form
        action=""
        className="mt-8 flex w-[80%] max-w-screen-sm mx-auto rounded-3xl items-center justify-between bg-white overflow-clip"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          className="flex-auto h-full pl-3 text-darkPrimary outline-none"
        />
        <button className="bg-red-500 text-slate-100 flex-none py-2 px-4 font-bold">
          Sign Up
        </button>
      </form>
      <p className="mt-8">Find Me!</p>
      <SocialMedia />
      <div>
        <p className="text-xs mt-8 opacity-60">
          &copy; 2022 bughowi.dev - Built with Next.js, Tailwind, Contentlayer,
          Vercel
        </p>
      </div>
    </footer>
  );
};

export default Subscribe;
