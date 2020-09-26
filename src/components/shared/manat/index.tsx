import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export interface IManat {
  className?: string;
}

export const Manat: FC<IManat> = ({ className }) => {
  const useStyles = makeStyles((theme) => {
    return {
      manat: {
        fontFamily: "jis !important",
        color: "inherit",
      },
    };
  });
  const classes = useStyles();

  return <span className={clsx(classes.manat, className)}>M</span>;
};
