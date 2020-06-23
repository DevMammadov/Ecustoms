import { Checkbox as MaterialCheckbox, CheckboxProps } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { FC } from "react";
import { useStyles } from "./text-field";
import clsx from "clsx";

interface IClasses {
  root: string;
  label: string;
  input: string;
}

interface IInputLabel {
  label?: string;
  className?: string;
  classes?: IClasses;
  mask?: any;
  maskchar?: any;
}

export const Checkbox: FC<IInputLabel & CheckboxProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={props.classes?.root}>
      <FormControlLabel
        labelPlacement="end"
        control={<MaterialCheckbox classes={{ root: clsx(classes.checkbox, props?.classes?.input) }} {...props} />}
        label={props.label}
        classes={{
          root: clsx(classes.labelright, props?.classes?.label),
        }}
      />
    </div>
  );
};
