import React, { FC, ReactNode } from "react";
import { useStyles } from "./autocomplate.style";
import { useTranslator } from "localization";
import { AutocompleteProps, AutocompleteRenderInputParams, Autocomplete as MuiAutocomplete } from "@material-ui/lab/";
import { TextField } from "../..";
import { CircularProgress } from "@material-ui/core";
import clsx from "clsx";

export interface IAutoComplate extends Omit<AutocompleteProps<any, boolean, boolean, boolean>, "renderInput"> {
  renderInput?(params: AutocompleteRenderInputParams): ReactNode;
  label?: string;
  errorText?: string;
  helperText?: string;
  loading?: boolean;
  className?: string;
  error?: boolean;
  showQuestionMark?: boolean;
}

export const Autocomplete: FC<IAutoComplate> = ({
  renderInput,
  label,
  errorText,
  helperText,
  loading = false,
  className,
  error = false,
  showQuestionMark,
  ...rest
}) => {
  const lang = useTranslator("main");
  const classes = useStyles();

  return (
    <MuiAutocomplete
      classes={{ inputRoot: classes.autocomplateInputRoot, input: classes.autocomlpateInput }}
      className={clsx(className, classes.root)}
      renderInput={
        renderInput
          ? renderInput
          : (params) => (
              <TextField
                helperText={helperText}
                showQuestionMark={showQuestionMark}
                error={error}
                {...params}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress className={classes.progress} color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )
      }
      noOptionsText={lang.noRecordToDisplay}
      clearText={lang.clear}
      closeText={lang.close}
      openText={lang.open}
      {...rest}
    />
  );
};
