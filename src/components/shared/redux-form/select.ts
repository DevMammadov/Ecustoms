import createComponent from "./createComponent";
import { Select as CustomSelect } from "components/shared";
import mapError from "./mapError";

export interface ISelectData {
  id: string | number;
  value: string | number;
}

export const Select = createComponent(
  CustomSelect,
  ({ input: { onChange, value, selected, onBlur, ...inputProps }, onChange: onChangeFromField, ...props }: any) => {
    return {
      ...mapError(props),
      ...inputProps,
      value: value || props.selected,
      onChange: (event: any, index: any, value: any) => {
        onChange(event.target.value);
        if (onChangeFromField) {
          onChangeFromField(event.target.value);
        }
      },
      onBlur: () => onBlur(value),
    };
  }
);
