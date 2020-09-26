import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useStyles } from "./search-input.style";
import { useTranslator } from "localization";
import clsx from "clsx";
import { TextField } from "components/shared";

interface IInputSearch {
  onSearch(text: string | number): void;
  defaultValue?: string | number;
  label?: string;
  className?: string;
}

export const SearchInput: FC<IInputSearch> = ({ onSearch, defaultValue, label, className }) => {
  const classes = useStyles();
  const lang = useTranslator("givingPermission", ["myInfo"]);
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => onSearch(value)}>
              <FontAwesomeIcon icon={faSearch} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
