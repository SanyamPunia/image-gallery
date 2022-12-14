import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700;900&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-zinc-800 transition duration-300 bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
