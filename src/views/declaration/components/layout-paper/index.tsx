import React, { FC } from "react";
import { useStyles } from "./layout-paper.style";
import { Paper } from "@material-ui/core";
import clsx from "clsx";

export interface ILayoutPaperPage {
  className?: string;
}

export const LayoutPaper: FC<ILayoutPaperPage> = ({ className, ...rest }) => {
  const classes = useStyles();

  return <Paper {...rest} className={clsx(classes.root, className)} />;
};
