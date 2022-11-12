import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../components/Board";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
};

export default Home;
