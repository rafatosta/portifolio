import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
