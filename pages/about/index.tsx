import Head from "next/head";
function index() {
  return (
    <>
      <Head>
        <title>bughowi.com - About</title>
        <meta name="description" content="Find more about me" />
      </Head>
      <div className="py-10" />
      <h1 className="font-bold text-3xl">About Me</h1>
      <div className="space-y-4 py-3">
        <p>
          Hello! I&apos;m{" "}
          <span className="font-bold text-yellowAccent">Owi</span>. I&apos;m a
          Computer Science student - Web & Android Developer from Jepara,
          Indonesia.
        </p>
        <p>
          I have been learning some basic of Web Programming since high school
          by creating a blog using CMS likes Wordpress and Blogger. But I
          didn&apos;t design it myself. Instead I was just download some free
          Wordpress or Blogger template on the internet then I modified it a
          little bit.
        </p>
        <p>
          I started digging more about Web Development stuff during my college.
          Start by learn Javascript and PHP, then continue using some popular
          framework such as React.js, Next.js and Laravel. At the end I prefer
          to choose JavaScript as my favorite language to build a website.
        </p>
        <p>
          I created this website for two main reasons. The first one is to
          showcase and share all the things I&apos;ve learned during my journey,
          and who knows?, maybe help others, that like me are learning. The
          second reason is, I always like to learn new things. So, I wanted this
          website to be the place where I can put in practice all the new things
          I just learn.
        </p>
        <p>
          If you want to contact me, go ahead and send me a message through my
          social media below. I&apos;ll be happy to receive your feedback.
        </p>
      </div>
    </>
  );
}

export default index;
