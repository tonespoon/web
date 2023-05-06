import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Figtree, Source_Serif_Pro } from "next/font/google";
import { SessionProvider } from "next-auth/react";

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const sourceSerifPro = Source_Serif_Pro({
  subsets: ["latin"],
  variable: "--font-source-serif-pro",
  weight: ["200", "600", "700", "900"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
