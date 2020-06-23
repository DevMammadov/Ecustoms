import React, { FC } from "react";
import { FormControlLabel, Select as MaterialSelect, SelectProps, MenuItem } from "@material-ui/core";
import { useStyles } from "./select.style";

interface ISelectData {
  id: string | number;
  value: string | number;
}

interface ISelect {
  errorText: string;
  data: ISelectData[];
  selected?: string | number;
  className?: string;
}

export const Select: FC<ISelect & SelectProps> = ({
  errorText,
  children,
  label,
  data,
  selected,
  className,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      labelPlacement="top"
      classes={{ label: classes.label, root: classes.labelRoot }}
      className={className}
      control={
        <MaterialSelect value={selected || null} className={classes.select} {...rest}>
          {data.map((type: ISelectData) => (
            <MenuItem value={type.id} key={type.id}>
              {type.value}
            </MenuItem>
          ))}
        </MaterialSelect>
      }
      label={label || ""}
    />
  );
};
