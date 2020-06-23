import { MenuItem, Select } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./lang.style";
import clsx from "clsx";
import { useTranslator } from "localization";

interface ILang {
  changeLang(lang: string): void;
  selected: string;
  className?: string;
}

export const Lang: FC<ILang> = ({ changeLang, className, selected }) => {
  const classes = useStyles();
  const lang = useTranslator("main");

  const handleChange = (lang: string) => {
    localStorage.setItem("lang", lang);
    changeLang(lang);
  };

  return (
    <div className={clsx(className)}>
      <Select
        value={selected}
        classes={{ root: classes.selectRoot, select: classes.select }}
        onChange={(e: any) => handleChange(e.target.value)}
      >
        <MenuItem key={1} value="az">
          {lang.az}
        </MenuItem>
        <MenuItem key={2} value="en">
          {lang.en}
        </MenuItem>
        <MenuItem key={3} value="ru">
          {lang.ru}
        </MenuItem>
      </Select>
    </div>
  );
};
