import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography } from "@material-ui/core";
import { TextField } from "../text-field/text-field";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "./search-input.style";
import { useTranslator } from "localization";
import clsx from "clsx";

interface IInputSearch {
  onSearch(text: string | number): void;
  defaultValue?: string | number;
  title?: string;
  className?: string;
}

export const SearchInput: FC<IInputSearch> = ({ onSearch, defaultValue, title, className }) => {
  const classes = useStyles();
  const lang = useTranslator("givingPermission", ["myInfo"]);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(({ text }) => {
    onSearch(text);
  });

  return (
    <div className={clsx(className)}>
      {title && (
        <Typography component="div" className={classes.inputLabel}>
          {lang.pinCode}
        </Typography>
      )}
      <div className={classes.search}>
        <form onSubmit={onSubmit} className={classes.searchForm}>
          <TextField
            className={classes.inputRoot}
            placeholder={lang.search}
            name="text"
            inputRef={register}
            defaultValue={defaultValue && defaultValue}
          />
          <IconButton type="submit" className={classes.searchIcon}>
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        </form>
      </div>
    </div>
  );
};
