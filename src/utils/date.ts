import dayjs from "dayjs";

export function formatDate(date: string) {
  return dayjs(date).format("MMMM YYYY, D");
}

export function compareDesc(a: Date | string, b: Date | string) {
  const left = dayjs(a);
  const right = dayjs(b);
  if (left.isBefore(right)) return 1;
  if (left.isAfter(right)) return -1;
  return 0;
}
