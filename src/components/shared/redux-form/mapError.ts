const mapError = (
  { meta: { touched = false, error = [], warning = [] } = {}, input, ...props }: any,
  errorProp = "errorText"
): any =>
  touched && (error || warning)
    ? {
        ...props,
        ...input,
        [errorProp]: error || warning,
      }
    : { ...input, ...props };

export default mapError;
