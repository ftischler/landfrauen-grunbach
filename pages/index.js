import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import dates from "../data/dates.json";

import QRCode from "react-qr-code";
import { Button, Card, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#ffffff" />
        <title>Landfrauen Remshalden-Grunbach</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.cardcontainer}>
          {dates.map((date) => {
            const url = `/dates/${encodeURIComponent(date.id)}`;
            return (
              <Card className={styles.qrcontainer} key={date.id}>
                <div>
                  <div className={styles.m10}>
                    <a
                      className={styles.qrcode}
                      href={`/api/qr/${date.id}?width=128`}
                      download
                    >
                      <QRCode value={url}></QRCode>
                    </a>
                  </div>
                  <div className={styles.m10}>
                    <a>
                      <div className={styles.m10}>
                        <Typography variant="body1">
                          {date.type} {date.title}
                        </Typography>
                        <Typography variant="body2">{date.speaker}</Typography>
                      </div>
                      <div className={styles.m10}>
                        <Typography variant="body2">{date.dateFmt}</Typography>
                        <Typography variant="body2">{date.timeFmt}</Typography>
                      </div>
                      <div className={styles.m10}>
                        <Typography variant="body2">{date.location}</Typography>
                        <Typography variant="body2">{date.address}</Typography>
                      </div>
                    </a>
                  </div>
                  <Link href={url}>
                    <Button variant="outlined">Mehr ...</Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
