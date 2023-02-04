import Head from "next/head";
import Main from "../partials/Main";
import Services from "../partials/Services";
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
        {/* <Services /> */}
        <Contact />
      </main>
    </div>
  );
}
