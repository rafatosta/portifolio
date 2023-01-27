import Head from "next/head";
import Main from "../partials/Main";
import About from "../partials/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafael Tosta | Desenvolvedor</title>
        <meta name="description" content="Potifólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />

        <About />
      </main>
    </div>
  );
}
