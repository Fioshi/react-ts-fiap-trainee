import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html 
      lang="pt_br">
      <Head>
        <link rel="icon" href="assets/favicon.ico" />
        <meta name="Landing page FIAP" content="FIAP" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
