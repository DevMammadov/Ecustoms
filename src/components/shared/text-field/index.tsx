import React from "react";
import {
  InputBase,
  InputLabel,
  FormControl,
  InputBaseComponentProps
} from "@material-ui/core";

interface ITextField {
  id: string | number;
  label: string;
}

export const TextField = (props: any) => {
  return (
    <FormControl>
      <InputLabel htmlFor=""></InputLabel>
      <InputBase {...props} />
    </FormControl>
  );
};
