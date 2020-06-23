import React, { FC } from "react";
import { RadioGroup as MaterialRadioGroup, RadioGroupProps } from "@material-ui/core";
import createComponent from "./createComponent";
import mapError from "./mapError";

interface ICustomRadioGroup {
  errorText: string;
}

const CustomRadioGroup: FC<RadioGroupProps & ICustomRadioGroup> = ({ errorText, children, ...rest }) => {
  return <MaterialRadioGroup {...rest}> {children} </MaterialRadioGroup>;
};

const mapValueToValueSelected = ({ input: { ...inputProps }, ...props }, errorProp: any) => {
  //console.log(inputProps.value);
  return mapError(
    {
      ...props,
      input: { ...inputProps, value: inputProps.value },
    },
    errorProp
  );
};

export const RadioGroup = createComponent(CustomRadioGroup, mapValueToValueSelected);
