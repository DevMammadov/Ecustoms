import React, { FC } from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDatePickerProps } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useStyles } from "./data-picker.style";
import clsx from "clsx";
import { TextField } from "components/shared/form";

interface IClasses {
  root?: string;
  picker?: string;
  helperText?: string;
}

export interface IDatePicker {
  label?: string;
  className?: string;
  classes?: IClasses;
  errorText?: string;
  helperText?: string;
}

export const DatePicker: FC<IDatePicker & KeyboardDatePickerProps> = ({
  label,
  className,
  classes,
  errorText,
  helperText,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd.MM.yyyy"
          autoOk={true}
          helperText=""
          className={clsx(styles.picker, classes?.picker, helperText?.length && styles.errorBorder, className)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          TextFieldComponent={(props) => <TextField label={label} {...props} variant="outlined" />}
          {...rest}
        />

        {helperText && <div className={clsx(classes?.helperText, styles.heplerText)}>{helperText}</div>}
      </>
    </MuiPickersUtilsProvider>
  );
};
