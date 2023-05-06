import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";
import { figtree, sourceSerifPro } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${figtree.variable} ${sourceSerifPro.variable} bg-white font-sans`}
      >
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
