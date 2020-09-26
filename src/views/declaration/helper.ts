import { useTranslator } from "localization";

export const useSteps = () => {
  const lang = useTranslator("declaration");
  return [lang.start, lang.personalİnfo, lang.direction, lang.currencyInfo, lang.confirm];
};
