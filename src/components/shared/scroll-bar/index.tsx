import React, { FC } from "react";
import { useStyles } from "./scroll-bar.style";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

export interface IScrollBar {
  maxHeight?: number;
  sm?: number;
  xs?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

export const ScrollBar: FC<IScrollBar> = ({ children, maxHeight, className, sm, md, lg, xs, xl }) => {
  const classes = useStyles();

  const useDynamicStyles = makeStyles((theme) => {
    return {
      scrollBarHeight: {
        maxHeight: maxHeight || "auto",
      },
      [theme.breakpoints.down("xl")]: {
        scrollBarHeight: {
          maxHeight: xl || "auto",
        },
      },
      [theme.breakpoints.down("lg")]: {
        scrollBarHeight: {
          maxHeight: lg || "auto",
        },
      },
      [theme.breakpoints.down("md")]: {
        scrollBarHeight: {
          maxHeight: md || "auto",
        },
      },
      [theme.breakpoints.down("sm")]: {
        scrollBarHeight: {
          maxHeight: sm || "auto",
        },
      },
      [theme.breakpoints.down("xs")]: {
        scrollBarHeight: {
          maxHeight: xs || "auto",
        },
      },
    };
  });

  const dynamicClasses = useDynamicStyles();

  return <div className={clsx(classes.scrollBar, dynamicClasses.scrollBarHeight, className)}>{children}</div>;
};
