import dates from "../../data/dates.json";
import { ICalendar } from "datebook";

export function getStaticPaths() {
  const paths = dates.map(({ id }) => `/dates/${id}`);
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const date = dates.find(({ id }) => id === params.id);
  return { props: { date } };
}

export default function Dates({ date }) {
  const iCalendar = new ICalendar({
    title: `${date.type}: ${date.title}`,
    location: date.location,
    start: new Date(date.start),
    end: new Date(date.end),
  });

  return (
    <>
      <div className="date-header"></div>
      <div>
        <h1>
          {date.type} {date.title}
        </h1>
        <p>Referent: {date.speaker}</p>
      </div>
      <div>
        <div></div>
        <div>
          <p>WANN</p>
          <div>
            <p>{date.dateFmt}</p>
            <p>{date.timeFmt}</p>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <p>WO</p>
          <div>
            <p>{date.location}</p>
            <p>{date.address}</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => iCalendar.download()}>+</button>
      </div>
    </>
  );
}
