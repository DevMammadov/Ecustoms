import createComponent from "./createComponent";
import { Autocomplete as CustomAutocomplate } from "components/shared";
import mapError from "./mapError";

export const Autocomplete = createComponent(
  CustomAutocomplate,
  ({ input: { onChange, onBlur, value, ...inputProps }, dataSourceConfig, optionLabel, ...props }: any) => {
    return {
      ...mapError(props),
      ...inputProps,
      helperText: props.meta.touched && props.meta.error,
      error: props.meta.touched && !!props.meta.error,
      getOptionLabel: (option: any) => option[optionLabel] || "",
      getOptionSelected: (option: any, value: any) => value[optionLabel] === option[optionLabel] || null,
      defaultValue: props.meta.initial,
      value: value || null,
      onChange: (event: any, newValue: string | null) => {
        onChange(newValue);
      },
      onBlur: () => onBlur(value),
    };
  }
);
