import { Checkbox as MaterialCheckbox, CheckboxProps } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { FC } from "react";
import { useStyles } from "./text-field";
import clsx from "clsx";

interface IClasses {
  root?: string;
  label?: string;
  checkbox?: string;
}

export interface ICheckbox {
  label?: string;
  className?: string;
  classes?: IClasses;
  maskchar?: any;
  errorText?: any;
  error?: boolean;
}

export const Checkbox: FC<ICheckbox & CheckboxProps> = ({ errorText, error, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={rest.classes?.root}>
      <FormControlLabel
        labelPlacement="end"
        control={
          <MaterialCheckbox
            classes={{ root: clsx(classes.checkbox, rest?.classes?.checkbox, error && classes.errorCheckbox) }}
            {...rest}
          />
        }
        label={rest.label}
        classes={{
          root: clsx(classes.labelright, rest?.classes?.label, error && classes.errorLabel),
        }}
      />
    </div>
  );
};
