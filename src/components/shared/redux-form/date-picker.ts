import createComponent from "./createComponent";
import mapError from "./mapError";
import { DatePicker as CustomDatePicker } from "components/shared/form";

//export const DatePicker = createComponent(CustomDatePicker, ({ defaultValue, ...props }: any) => mapError(props));

const mapValueToValueSelected = ({ input: { ...inputProps }, ...props }, errorProp: any) => {
  return mapError(
    {
      ...props,
      input: { ...inputProps, value: inputProps.value || null },
      helperText: props.meta.error,
      error: !!props.meta.error,
    },
    errorProp
  );
};

export const DatePicker = createComponent(CustomDatePicker, mapValueToValueSelected);
