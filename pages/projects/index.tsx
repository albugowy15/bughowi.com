import Projects from "components/projects/Projects";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>bughowi.com - Projects</title>
        <meta name="description" content="Some of my personal projects" />
      </Head>
      <div className="py-10" />
      <section className="mx-auto w-full">
        <h1 className="text-center font-bold text-3xl">Projects</h1>
        <p className="text-center py-3">Some of my personal projects</p>
        <Projects />
      </section>
    </>
  );
}

export default index;
