import dayjs from "dayjs";

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(date: string): string {
  return dateFormatter.format(new Date(date));
}

export function compareDesc(a: Date | string, b: Date | string) {
  const left = dayjs(a);
  const right = dayjs(b);
  if (left.isBefore(right)) return 1;
  if (left.isAfter(right)) return -1;
  return 0;
}
