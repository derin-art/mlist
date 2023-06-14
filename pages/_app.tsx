import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Lenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  };

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
