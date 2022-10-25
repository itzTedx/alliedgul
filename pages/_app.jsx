import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

import Layout from "../components/Layout";

import "../styles/globals.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <NextNProgress
          color="linear-gradient(90deg, #00b4d8 0%, #219ebc 100%);"
          startPosition={0.2}
          stopDelayMs={100}
          height={5}
          showOnShallow={true}
          options={{ easing: "ease-in-out", speed: 200 }}
        />
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
