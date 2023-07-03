import { Form } from "@interfaces/component";
import useSubscribeToNewsletter from "@utils/hooks/useSubscribeToNewsletter";
import SocialMedia from "./SocialMedia";
import Typography from "@components/Typography";

const Subscribe = () => {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <footer className="mx-auto p-5 w-full">
      <div className="bg-darkSecondary w-full max-w-xl rounded border border-gray-700 p-5 mx-auto">
        <Typography variant="h4">Subscribe to the newsletter</Typography>

        <Typography variant="body1" className="py-1">
          Get emails from me about web development, programming, tech, and early
          access to new articles.
        </Typography>
        <form
          onSubmit={subscribe}
          className="w-full mx-auto mt-1"
          method="post"
          target="_blank"
        >
          <div className="flex flex-wrap w-full items-center justify-center gap-2">
            <input
              type="email"
              ref={inputEl}
              id="email"
              className="flex-auto bg-darkPrimary border border-darkSecondary text-slate-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2"
              placeholder="name@gmail.com"
              required
            />
            <button
              type="submit"
              className="flex-1 w-28 p-1.5 text-center text-slate-200 bg-blueAccent rounded font-bold hover:bg-blue-500 transition-colors"
            >
              {form.state === Form.Loading ? (
                <span>Loading...</span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>

          {form.state === Form.Success && (
            <div className="mt-4">
              <span className="font-bold text-green-600">
                <span>&#128522;</span> Thank you for subscribing my newsletters
              </span>
            </div>
          )}
        </form>
      </div>
      <Typography variant="body2" className="text-center mt-8">
        Find Me!
      </Typography>
      <SocialMedia />
      <div className="py-3" />
      <Typography variant="label2" className="text-center  opacity-60">
        &copy; 2022 bughowi.com - Built with Next.js, Tailwind, Contentlayer,
        Vercel
      </Typography>
    </footer>
  );
};

export default Subscribe;
