import dates from "../../data/dates.json";
import { ICalendar } from "datebook";

import styles from "../../styles/Dates.module.css";
import Head from "next/head";
import { Fab, Typography } from "@mui/material";
import CalendarIcon from "@mui/icons-material/DateRange";
import LocationIcon from "@mui/icons-material/Place";

import { BiCalendarPlus } from "react-icons/bi";
import { FormattedDate } from "react-intl";
import TimeRange from "../components/TimeRange";
import { useConvertDates } from "../../hooks/use-convert-dates";

export function getStaticPaths() {
  const paths = dates.map(({ id }) => `/dates/${id}`);
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const date = dates.find(({ id }) => id === params.id);
  return { props: { date } };
}

export default function Dates({ date }) {
  const { start, end } = useConvertDates(date);

  const iCalendar = new ICalendar({
    title: `${date.type}: ${date.title}`,
    location: `${date.location}, ${date.address}`,
    start,
    end,
  });

  return (
    <>
      <Head>
        <meta name="theme-color" content="#289C38" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          {date.type ? `${date.type}: ` : ""}
          {date.title}
        </title>
      </Head>
      <main className={styles.main}>
        <div className={styles.dateheader}></div>
        <div className={styles.date}>
          <div>
            <Typography variant="h6" component="h1">
              <strong>
                {date.type ? `${date.type}: ` : ""}
                {date.title}
              </strong>
            </Typography>
            {date.speaker && date.speakerTitle && (
              <div className={styles.speaker}>
                <Typography variant="subtitle">
                  <strong>
                    {date.speakerTitle}: {date.speaker}
                  </strong>
                </Typography>
              </div>
            )}
          </div>
          <div className={styles.sections}>
            <div className={styles.section}>
              <div className={styles.iconcontainer}>
                <CalendarIcon className={styles.sectionicon}></CalendarIcon>
              </div>
              <div>
                <Typography variant="body1">
                  <strong>WANN</strong>
                </Typography>
                <div>
                  <Typography variant="body1">
                    <FormattedDate
                      value={start}
                      weekday="long"
                      day="2-digit"
                      month="long"
                      year="numeric"
                    ></FormattedDate>
                  </Typography>
                  <Typography variant="body1">
                    <TimeRange start={start} end={end}></TimeRange>
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.iconcontainer}>
                <LocationIcon className={styles.sectionicon}></LocationIcon>
              </div>
              <div>
                <Typography variant="body1">
                  <strong>WO</strong>
                </Typography>
                <div>
                  <Typography variant="body1">{date.location}</Typography>
                  <Typography variant="body1" className={styles.grey}>
                    {date.address}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Fab
              className={styles.fab}
              color="primary"
              onClick={() => iCalendar.download()}
            >
              <BiCalendarPlus size="25px"></BiCalendarPlus>
            </Fab>
          </div>
        </div>
      </main>
    </>
  );
}
