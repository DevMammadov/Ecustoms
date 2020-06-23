import createComponent from "./createComponent";
import mapError from "./mapError";
import { Radio as CustomRadio } from "components/shared";

export const Radio = createComponent(CustomRadio, ({ defaultValue, ...props }: any) => mapError(props));
