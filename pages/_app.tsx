import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></Script>
    </>
  );
}
