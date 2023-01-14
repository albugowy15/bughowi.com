import "styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
