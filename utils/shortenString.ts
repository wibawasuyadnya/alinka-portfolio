type ShortenString = {
  text: string;
  startLength: number;
  displayLength: number;
};

export function shortenStr({
  text,
  startLength,
  displayLength,
}: ShortenString) {
  var target = text;
  if (target.length > displayLength) {
    const afterStart = target.slice(startLength);
    const words = afterStart.trim().split(/\s+/);
    const truncatedWords = words.slice(0, displayLength).join(" ") + "...";
    return truncatedWords;
  }
}
