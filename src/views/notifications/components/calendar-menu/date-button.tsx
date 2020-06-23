import React, { FC } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/pro-regular-svg-icons";
import { useStyles } from "./calendar-menu.style";

interface IDateButton {
  date: Date;
}

export const DateButton: FC<IDateButton & ButtonProps> = ({ date, ...rest }) => {
  const classes = useStyles();
  return (
    <Button {...rest} variant="contained" color="primary">
      <FontAwesomeIcon className={classes.dateButtonIcon} icon={faCalendarAlt} />
      <span> {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`} </span>
    </Button>
  );
};
