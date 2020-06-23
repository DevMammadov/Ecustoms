import createComponent from "./createComponent";
import mapError from "./mapError";
import { FileUploader as CustomFileUploader } from "components/shared";

const mapValueToValueSelected = ({ input: { value = "", ...inputProps }, ...props }, errorProp: any) => {
  return mapError(
    {
      ...props,
      input: { ...inputProps },
      helperText: props.meta.error,
    },
    errorProp
  );
};

export const FileUploader = createComponent(CustomFileUploader, mapValueToValueSelected);
