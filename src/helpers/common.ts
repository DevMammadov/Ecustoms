export const getLimitOffset = (ofst: number, lmt: number) => {
  let offset = (ofst - 1) * lmt;
  let limit = lmt;
  return { offset, limit };
};
