import createComponent from "./createComponent";
import mapError from "./mapError";
import { Checkbox as MuiCheckbox } from "components/shared";

export const Checkbox = createComponent(MuiCheckbox, ({ defaultValue, ...props }: any) => {
  return { ...mapError(props) };
});
