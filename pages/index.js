import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import dates from "../data/dates.json";

import QRCode from "react-qr-code";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landfrauen Remshalden-Grunbach</title>
        <meta name="description" content="Landfrauen Remshalden-Grunbach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {dates.map((date) => {
            const url = `/dates/${encodeURIComponent(date.id)}`;
            return (
              <div className={styles.qrcode} key={date.id}>
                <Link href={url}>
                  <a>
                    <QRCode value={url}></QRCode>
                    <span>{date.title}</span>
                  </a>
                </Link>
                <br />
              </div>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
