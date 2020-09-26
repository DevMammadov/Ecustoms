import React, { FC } from "react";
import { TextField as MuiTextField, TextFieldProps, InputAdornment } from "@material-ui/core";
import { useStyles } from "./text-field.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";

interface ITextField {
  errorText?: any;
  iconText?: string | FC;
  iconTextPoisition?: "end" | "start";
  showQuestionMark?: boolean;
}

export const TextField: FC<ITextField & TextFieldProps> = ({
  errorText,
  iconText,
  iconTextPoisition = "end",
  label,
  showQuestionMark = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={`MuiFormControl-root MuiTextField-root ${classes.root}`}>
      <label>
        <div className={classes.labelContainer}>
          <div className={clsx(classes.label, rest.disabled && classes.labelDisabled)}>{label}</div>
          {showQuestionMark && <FontAwesomeIcon icon={faQuestionCircle} className={classes.questionMark} />}
        </div>
        <MuiTextField
          classes={{
            root: classes.root,
          }}
          variant="outlined"
          InputProps={{
            endAdornment: iconTextPoisition === "end" && iconText && (
              <InputAdornment position={iconTextPoisition}>{iconText}</InputAdornment>
            ),
            startAdornment: iconTextPoisition === "start" && iconText && (
              <InputAdornment position={iconTextPoisition}>{iconText}</InputAdornment>
            ),
          }}
          {...rest}
        />
      </label>
    </div>
  );
};
