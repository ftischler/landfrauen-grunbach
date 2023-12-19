export const createTitle = (date) =>
  `${date.type ? `${date.type}: ` : ""}${date.title}`;
