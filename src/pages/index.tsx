import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>gantavya</title>
        <meta name="description" content="gantavya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>{"Get started by adding URL as query parameter like this ->"}</p>
          <a
            href={
              "https://gantavya.aashutosh.dev/api/trace?url=git.aashutosh.dev"
            }
          >
            https://gantavya.aashutosh.dev/api/trace?url=git.aashutosh.dev
          </a>
        </div>
      </main>
    </>
  );
}
