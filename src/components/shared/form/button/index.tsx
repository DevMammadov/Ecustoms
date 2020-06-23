import { Button as MuiButton, ButtonProps, CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./button.style";
import clsx from "clsx";

interface IButtonProps {
  disableLoader?: boolean;
}

export const Button: FC<ButtonProps & IButtonProps> = ({ disableLoader, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiButton {...rest} className={clsx(classes.button, rest.className)}>
      {rest.disabled && !disableLoader && <CircularProgress color="primary" className={classes.progress} />}
      {rest.children}
    </MuiButton>
  );
};
