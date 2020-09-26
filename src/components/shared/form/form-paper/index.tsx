import React, { FC } from "react";
import { useStyles } from "./form-paper.style";
import { useTranslator } from "localization";
import { Paper as MuiPaper, PaperProps, Box } from "@material-ui/core";
import clsx from "clsx";
import { Button } from "../button";

export interface IFormPaper {
  noMargin?: boolean;
  className?: string;
  hideButtons?: boolean;
  hideBackButton?: boolean;
  onBackClick?(): void;
  submitButtonText?: string;
  backButtonText?: string;
}

export const FormPaper: FC<IFormPaper & PaperProps> = ({
  className,
  noMargin = false,
  children,
  hideButtons = false,
  hideBackButton = false,
  onBackClick = () => {},
  submitButtonText,
  backButtonText,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <MuiPaper className={clsx(styles.root, !noMargin && styles.marginsBetweenInputs, className)} {...rest}>
      <Box display="flex" justifyContent="center" className={styles.formContainer}>
        {children}
      </Box>
    </MuiPaper>
  );
};

export interface IButtonGroup {
  align?: "left" | "center" | "right";
}

export const ButtonGroup: FC<IButtonGroup> = ({ children, align = "right" }) => {
  const classes = useStyles();

  const getalign = () => {
    switch (align) {
      case "center":
        return "center";
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
    }
  };

  return (
    <Box display="flex" justifyContent={getalign()}>
      <Box className={classes.buttonContainer}>{children}</Box>
    </Box>
  );
};
