import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Lenis } from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Lenis root>
        {" "}
        <Component {...pageProps} />
      </Lenis>
    </>
  );
}

/* {/*       <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script> */
