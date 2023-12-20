import { FormattedTimeParts } from "react-intl";

export default function TimeRange({ start, end }) {
  return (
    <>
      <FormattedTimeParts value={start} hour="numeric" minute="numeric">
        {(parts) => (
          <>
            {parts[0].value}.{parts[2].value}
          </>
        )}
      </FormattedTimeParts>
      <span>&nbsp;-&nbsp;</span>
      <FormattedTimeParts value={end} hour="numeric" minute="numeric">
        {(parts) => (
          <>
            {parts[0].value}.{parts[2].value}
          </>
        )}
      </FormattedTimeParts>
      <span>&nbsp;Uhr</span>
    </>
  );
}
