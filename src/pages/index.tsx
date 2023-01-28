import Head from "next/head";
import Main from "../partials/Main";
import About from "../partials/About";
import Skills from "../partials/Skills";
import Projects from "../partials/Projects";
import Contact from "../partials/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafael Tosta | Desenvolvedor de Software</title>
        <meta name="description" content="Potifólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
