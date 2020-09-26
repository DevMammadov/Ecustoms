import React, { FC } from "react";
import { useStyles } from "./back-button.style";
import { useTranslator } from "localization";
import { Button } from "..";
import { faChevronLeft } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

export interface IBackButton {}

export const BackButton: FC<IBackButton> = () => {
  const lang = useTranslator("main");
  const history = useHistory();
  const classes = useStyles();

  return (
    <Button onClick={() => history.goBack()} className={classes.button}>
      <FontAwesomeIcon icon={faChevronLeft} className={classes.icon} /> {lang.back}
    </Button>
  );
};
