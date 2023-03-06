import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_CLIENTID);
  return (
    <div className={styles.main}>
      <Head>
        <title>NextJS (Assets, metadata, css)</title>
      </Head>
      <div className={styles.intro}>
        <h1 className={styles.intro.title}>
          Practicing NextJS assests, metadata, getStaticProps and SASS
        </h1>
        <p className={styles.paragraph}>
          This is a simple landing page with three tabs that displays different
          images each one. I'm just applying some basic styling and the basic
          metadata usage to reinforce what I learnt from the official NextJS
          documentation.# NextJS-assets-metadata-css
        </p>
      </div>
    </div>
  );
}
