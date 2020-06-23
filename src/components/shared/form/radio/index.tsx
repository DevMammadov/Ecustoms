import React, { FC } from "react";
import { FormControlLabel, Radio as MaterialRadio, RadioProps } from "@material-ui/core";

interface IRadio {
  label?: string;
  errorText?: string;
  value: any;
}

export const Radio: FC<RadioProps & IRadio> = ({ label, value, errorText, ...rest }) => {
  return <FormControlLabel value={value} control={<MaterialRadio {...rest} />} label={label} />;
};
