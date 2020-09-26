import createComponent from "./createComponent";
import mapError from "./mapError";
import { DatePicker as CustomDatePicker } from "components/shared/form";

//export const DatePicker = createComponent(CustomDatePicker, ({ defaultValue, ...props }: any) => mapError(props));

const mapValueToValueSelected = ({ input: { ...inputProps }, ...props }, errorProp: any) => {
  //console.log(props.meta.initial);
  return {
    ...mapError(
      {
        ...props,
        input: { ...inputProps, value: inputProps.value },
        helperText: props.meta.touched && props.meta.error,
        error: props.meta.touched && !!props.meta.error,
      },
      errorProp
    ),
  };
};

export const DatePicker = createComponent(CustomDatePicker, mapValueToValueSelected);
