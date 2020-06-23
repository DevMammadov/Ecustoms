import { translator } from "localization";

const getLang = () => {
  const currentLang = (localStorage.getItem("lang") as "az" | "en" | "ru") || "az";
  const lang = translator(currentLang, "formAlerts");
  return lang;
};

export const required = (value: any) => {
  return value ? undefined : getLang().required;
};

export const maxLength = (max: number) => (value: any) =>
  value && value.length > max ? `${getLang().maxLength} - ${max}` : undefined;

export const minLength = (min: number) => (value: any) =>
  value && value.length < min ? `${getLang().minLength} - ${min}` : undefined;

export const onlyNumber = (value: any) => (value && isNaN(Number(value)) ? getLang().onlyNumber : undefined);

export const email = (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? getLang().invalidEmail : undefined;

export const alphaNumeric = (value: any) =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? getLang().alphaNumberic : undefined;

export const phoneNumber = (value: any) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? getLang().invalidPhone : undefined;

export const onlyPdf = (value: any) =>
  value && value[0]?.name && value[0]?.type !== "application/pdf" ? getLang().onlyPdf : undefined;

export const size4mb = (value: any) => (value && value[0].size > 4 * 1024 * 1024 ? getLang().largeThan4Mb : undefined);

export const fileRequired = (value: any) => (value && !value[0]?.name ? getLang().required : undefined);

export const formValidators = {
  required,
  maxLength,
  onlyNumber,
  email,
  alphaNumeric,
  phoneNumber,
  onlyPdf,
  fileRequired,
  size4mb,
};
