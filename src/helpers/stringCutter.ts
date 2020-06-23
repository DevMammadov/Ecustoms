export const stringCutter = (text: string | undefined, end: number, start?: number) => {
  const startIndex = start ? start : 0;
  return text ? (text.length > end ? `${text.slice(startIndex, end)}...` : text) : "";
};
