import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta charSet="utf-8" />
        <title>Tar</title>
        <meta name="description" content="" />
        <meta name="author" content="Derin Owoade" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
