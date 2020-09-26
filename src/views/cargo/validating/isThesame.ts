export const isThesame = (array: any[], field: string) => {
  let valid = true;
  if (field && array.length && array.length > 0) {
    let first = array[0][field];
    if (first) {
      for (let prop of array) {
        if (prop[field] !== first) {
          valid = false;
        }
      }
    } else {
      console.log("given field dont exists inside objects of array");
    }
  } else {
    console.log("empty array");
  }
  return valid;
};
