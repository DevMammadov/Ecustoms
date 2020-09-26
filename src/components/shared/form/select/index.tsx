import React, { FC } from "react";
import { FormControlLabel, Select as MaterialSelect, SelectProps, MenuItem, TextField } from "@material-ui/core";
import { useStyles } from "./select.style";

interface ISelectData {
  id: string | number;
  value: string | number;
}

interface ISelect {
  errorText?: string;
  data?: ISelectData[] | undefined;
  selected?: string | number;
  className?: string;
}

export const Select: FC<ISelect & SelectProps> = ({
  errorText,
  children,
  label,
  data = [{ id: 0, value: "" }],
  selected,
  className,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControlLabel
        labelPlacement="top"
        classes={{ label: classes.label, root: classes.labelRoot }}
        className={className}
        control={
          data.length > 1 ? (
            <MaterialSelect
              variant="outlined"
              value={selected || ""}
              classes={{ select: classes.select }}
              className={classes.selectRoot}
              {...rest}
            >
              {data.map((type: ISelectData) => (
                <MenuItem value={type.id} key={type.id}>
                  {type.value}
                </MenuItem>
              ))}
            </MaterialSelect>
          ) : (
            <MaterialSelect
              variant="outlined"
              classes={{ select: classes.select }}
              className={classes.selectRoot}
              value={selected || ""}
              {...rest}
            >
              {children}
            </MaterialSelect>
          )
        }
        label={label || ""}
      />
    </div>
  );
};
