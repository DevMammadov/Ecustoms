import createComponent from "./createComponent";
import mapError from "./mapError";
import { TextField as CustomTextField } from "components/shared/form";

export const TextField = createComponent(CustomTextField, ({ defaultValue, ...props }: any) => {
  return {
    ...mapError(props),
    helperText: props.meta.touched && props.meta.error,
    error: !!props.meta.error && props.meta.touched,
  };
});
