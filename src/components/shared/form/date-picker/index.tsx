import React, { FC } from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDatePickerProps } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useStyles } from "./data-picker.style";
import clsx from "clsx";
import { FormControlLabel } from "@material-ui/core";

interface IClasses {
  root: string;
  picker: string;
}

interface IDatePicker {
  label?: string;
  className?: string;
  classes?: IClasses;
  errorText?: string;
}

export const DatePicker: FC<IDatePicker & KeyboardDatePickerProps> = ({
  label,
  className,
  classes,
  errorText,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControlLabel
        control={
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd.MM.yyyy"
            margin="normal"
            //onChange={handleDateChange}
            //labelFunc={formatDate}
            autoOk={true}
            className={clsx(styles.picker, classes?.picker)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            {...rest}
          />
        }
        label={label}
        labelPlacement="top"
        className={clsx(styles.label, className, classes?.root)}
      />
    </MuiPickersUtilsProvider>
  );
};
