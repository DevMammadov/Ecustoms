import { AlertPage } from "components/shared";
import React from "react";
import { useTranslator } from "localization";
import { faExclamationTriangle } from "@fortawesome/pro-duotone-svg-icons";

export const UConstruction = () => {
  const lang = useTranslator("login");
  return <AlertPage icon={faExclamationTriangle} color="warning" title={lang.underConstruction} />;
};
