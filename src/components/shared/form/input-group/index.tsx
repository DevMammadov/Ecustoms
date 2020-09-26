import React, { FC } from "react";
import { useStyles } from "./input-group.style";

export interface IInputGroup {}

export const InputGroup: FC<IInputGroup> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.inputGroup}>{children}</div>;
};
