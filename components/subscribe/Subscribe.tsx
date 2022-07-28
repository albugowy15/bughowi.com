import { useRef, useState } from "react";
import { Form, FormState } from "types/types";
import { useSubscribeToNewsletter } from "utils/form";
import SocialMedia from "./SocialMedia";

const Subscribe = () => {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <footer className="mx-auto p-5 w-full">
      <div className="bg-darkSecondary w-full max-w-xl rounded border border-gray-700 p-5 mx-auto">
        <h2 className="font-bold text-lg">Subscribe to the newsletter</h2>

        <p className="py-1">
          Get emails from me about web development, android, tech, and early
          access to new articles.
        </p>
        <form
          onSubmit={subscribe}
          className="w-full mx-auto mt-1"
          action="https://gmail.us14.list-manage.com/subscribe/post?u=ce2b4ff654953857d20a7afd0&amp;id=929044644d"
          method="post"
          target="_blank"
        >
          <div className="flex w-full items-center justify-center gap-2">
            <input
              type="email"
              ref={inputEl}
              id="email"
              className="flex-auto bg-darkPrimary border border-darkSecondary text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="name@gmail.com"
              required
            />
            <button
              type="submit"
              className="flex-1 bg-blueAccent p-2 rounded font-bold hover:bg-blue-500 transition-colors"
            >
              {form.state === Form.Loading ? (
                <span>Loading...</span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>
      </div>
      <p className="text-center mt-8">Find Me!</p>
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
