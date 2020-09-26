// formda gorsenmeyen indexler qeyd olunur

export const formEnum: any = {
  1: [],
  2: [3],
  3: [3],
  4: [3],
  5: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  6: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  7: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};

export const renderInput = (idn: number, index: number) => {
  return !formEnum[idn]?.includes(index);
};

export const checkFile = (file: any, isUpdate: boolean) => {
  let fl: any;
  if (isUpdate) {
    if (typeof file === "object") {
      fl = file[0];
    } else {
      fl = file;
    }
  } else {
    if (file) {
      fl = file[0];
    } else {
      fl = undefined;
    }
  }
  return fl;
};
