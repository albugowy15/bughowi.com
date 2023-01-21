import Head from "next/head";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import useOpenGraph from "@utils/hooks/useOpenGraph";
import OpenGraph from "@components/common/OpenGraph";

function AboutPage() {
  const ogProperties = useOpenGraph({
    url: "https://bughowi.com/about",
    title: "About - Mohamad Kholid Bughowi",
    image: {
      type: "image/png",
      url: "https://user-images.githubusercontent.com/49820990/188320807-8d2143c9-5786-4f4b-bbed-2d4bb32069b9.png",
      alt: "Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences",
    },
    description:
      "Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences",
    type: "website",
    site_name: "Mohamad Kholid Bughowi",
    author: "Mohamad Kholid Bughowi",
  });

  return (
    <>
      <Head>
        <title>About - Mohamad Kholid Bughowi</title>
        <meta
          name="description"
          content="Full Stack Developer with a passion for creating innovative web apps. Proficient in TypeScript and Go, dedicated to seamless user experiences"
        />

        <OpenGraph properties={ogProperties} />
      </Head>
      <div className="py-4" />
      <div>
        <h1 className="font-bold text-4xl text-center">About Me</h1>
        <div id="content-space" className="py-3 w-full lg:w-[65%] mx-auto">
          <h2 className="font-bold text-3xl">Introduction</h2>
          <p>
            Hello! &#128075; I&apos;m{" "}
            <span className="font-bold text-yellowAccent">Owi</span>. I&apos;m a
            Computer Science student - Fullstack Developer from Jepara,
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
            I started digging more about Web Development stuff during my
            college. Start by learn Javascript and PHP, then continue using some
            popular framework such as React.js, Next.js and Laravel. As I delved
            deeper into the world of web development, I discovered TypeScript
            and was immediately drawn to its strong typing and improved code
            scalability. I decided to make the switch and have been loving the
            enhanced development experience that TypeScript provides. It has not
            only helped me write more robust and maintainable code, but it has
            also allowed me to take on more complex projects with confidence.
            I&apos;m excited to continue exploring the capabilities of
            TypeScript and using it to build even more powerful web
            applications.
          </p>
          <p>
            I&apos;ve created this blog for two main reasons. First, as a
            developer, I am constantly learning new skills and technologies. I
            wanted a place to document and reflect on what I&apos;ve learned in
            order to solidify my understanding and be able to refer back to it
            later. Second, I wanted to showcase my projects and share my
            experiences with others in the developer community. I believe that
            sharing knowledge and helping others is an important part of being a
            developer. I hope that my blog will be a useful resource for other
            developers, and that it will help me to continue growing as a
            developer.
          </p>
          <h2 className="font-bold text-3xl pt-3">Tech Stack</h2>
          <p>
            I&apos;m currently enjoy build website using TypeScript, Next.js,
            and Tailwind CSS.
          </p>
          <h3 className="font-bold text-xl pt-2">
            <span className="mr-2">
              <SiTypescript className="inline" />
            </span>
            TypeScript
          </h3>
          <p>
            I have found that using TypeScript as my current tech stack is the
            perfect choice for me. TypeScript is a superset of JavaScript that
            adds optional static typing, classes, and interfaces. It provides
            many features that help me to catch errors early in the development
            process, making my code more reliable. TypeScript also enables me to
            write object-oriented code, and it&apos;s easy to refactor and
            scale. The type checking and autocompletion features that TypeScript
            provides, make my development process faster and more efficient.
            I&apos;m excited to continue working with TypeScript and using it to
            build more powerful and scalable applications.
          </p>
          <h3 className="font-bold text-xl pt-2">
            <span className="mr-2">
              <SiNextdotjs className="inline" />
            </span>
            Next.js
          </h3>
          <p>
            Next.js is a framework built on top of React that makes it easy to
            create server-rendered React applications. The framework provides a
            lot of out-of-the-box features that make development much faster and
            easier. It also enables me to build applications that are SEO
            friendly and have a better performance. With the help of Next.js, I
            have been able to build highly dynamic and responsive web
            applications that are optimized for both the user and the developer.
            I&apos;m excited to continue exploring the capabilities of Next.js
            and using it to build even more powerful web applications.
          </p>
          <h3 className="font-bold text-xl pt-2">
            <span className="mr-2">
              <SiTailwindcss className="inline" />
            </span>
            Tailwind
          </h3>
          <p>
            I have found that using a utility-first CSS framework like Tailwind
            CSS can help me to create fast, responsive, and beautiful web pages.
            Tailwind CSS provides a wide range of pre-defined CSS classes that
            can be used to quickly style elements on a page. This makes it easy
            to create consistent and responsive designs that look great on any
            device. I also appreciate the flexibility and customization options
            that Tailwind CSS provides. I can easily customize the design to
            match the look and feel of any project. I&apos;m excited to continue
            working with Tailwind CSS and using it to create beautiful and
            functional web pages.
          </p>
          <h2 className="font-bold text-3xl pt-3">Experience</h2>
          <h3 className="font-bold text-xl">
            Front End Engineer - Torche Education
          </h3>
          <p className="text-gray-400 mt-0">December 2022 - Present</p>
          <p className="mt-2">
            Create a new landing page and migrate to MERN (MongoDB, Express,
            React, Node.js) stack. Develope the landing page with Next.js,
            TypeScript, and Tailwind
          </p>
          <h3 className="font-bold text-xl">
            Full Stack Developer - Harisenin.com
          </h3>
          <p className="text-gray-400">September 2022 - December 2022</p>
          <p className="mt-2">
            Working for company internal dashboard to create or improve a
            feature using PHP, Laravel, TypeScript, Next.js, jQuery, MUI, and
            MySQL
          </p>

          <h2 className="font-bold text-3xl pt-3">Contact Me</h2>
          <p>
            If you want to contact me, go ahead and send me a message through my
            email and social media below. I&apos;ll be happy to receive your
            feedback.
          </p>
          <div className="text-base sm:text-lg p-4 rounded border-gray-800 w-fit flex flex-wrap justify-center gap-2 sm:gap-5 font-bold">
            <div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
              <FaEnvelope />
              <p>
                <a
                  href="mailto:kholidbughowi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  kholidbughowi@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
              <FaLinkedin className="text-blue-600" />
              <p>
                <a
                  href="https://linkedin.com/in/bughowi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mohamad Kholid Bughowi
                </a>
              </p>
            </div>
            <div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
              <FaTwitter className="text-sky-500" />
              <p>
                <a
                  href="https://twitter.com/bughowy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  bughowy
                </a>
              </p>
            </div>
            <div className="flex items-center flex-start gap-1 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition">
              <FaInstagram className="text-pink-500" />
              <p>
                <a
                  href="https://instagram.com/muhammad_bughowy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  muhammad_bughowy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
