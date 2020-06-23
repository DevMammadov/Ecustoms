export const toFormData = (object: {}) => {
  const formData = new FormData();

  for (let key of Object.keys(object)) {
    formData.append(key, object[key as keyof object]);
  }
  return formData;
};
