import { useMemo } from "react";

export const convertDates = (date) => {
  const start = new Date(date.start);
  const end = new Date(date.end);

  return {
    start,
    end,
  };
};

export const useConvertDates = (date) =>
  useMemo(() => convertDates(date), [date]);
