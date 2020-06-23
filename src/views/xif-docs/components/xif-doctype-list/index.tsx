import React, { FC } from "react";
import { useStyles } from "./xif-doctype-list-style";
import { MenuItem, FormControlLabel } from "@material-ui/core";
import { ISelectItems } from "types";
import { Select } from "components/shared/redux-form";

interface IXifDocTypeList {
  selected: number;
  data: ISelectItems[];
  label?: string;
  onChange(e: any): void;
}

export const XifDocTypeList: FC<IXifDocTypeList> = ({ data, selected, onChange, label, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.labelContainer}>
      <FormControlLabel
        labelPlacement="top"
        classes={{ label: classes.label, root: classes.labelRoot }}
        control={
          <Select {...rest}>
            {data.map((type: ISelectItems) => (
              <MenuItem value={type.idn} key={type.idn}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        }
        label={label || ""}
      />
    </div>
  );
};
//value={selected} className={classes.select} onChange={(e: any) => onChange(e.target.value)}
