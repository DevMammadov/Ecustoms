export const toFormData = (object: {}) => {
  const formData = new FormData();

  const checkValue = (val: any) => {
    if (!val || val === "Invalid date" || val === "undefined") {
      return "";
    } else {
      return val;
    }
  };

  for (let key of Object.keys(object)) {
    formData.append(key, checkValue(object[key as keyof object]));
  }
  return formData;
};
