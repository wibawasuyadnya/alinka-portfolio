export type DateFormat =
  | "YYYY-MM-DD"
  | "DD-MM-YYYY"
  | "MM-DD-YYYY"
  | "time"
  | "DD-Month-YYYY"
  | "full"
  | "custom";

export function formatDate(
  content: string,
  {
    format,
    separator = "-",
  }: {
    format: DateFormat;
    separator?: string;
  }
): string {
  const date = new Date(content);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const fullMonth = monthNames[date.getMonth()];

  const formatMap: Record<DateFormat, string> = {
    "YYYY-MM-DD": `${year}${separator}${month}${separator}${day}`,
    "DD-MM-YYYY": `${day}${separator}${month}${separator}${year}`,
    "MM-DD-YYYY": `${month}${separator}${day}${separator}${year}`,
    "DD-Month-YYYY": `${day}${separator}${fullMonth}${separator}${year}`,
    time: `${hours}:${minutes}:${seconds}`,
    full: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`,
    custom: `${day}${separator}${month}${separator}${year} ${hours}:${minutes}`,
  };

  return formatMap[format] || content;
}
