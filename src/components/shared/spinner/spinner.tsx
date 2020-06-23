import CircularProgress, { CircularProgressProps } from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import clsx from "clsx";

interface ISpinnerComponent {
  title?: string;
  containerClass?: string;
  hidden?: boolean;
}

export const Spinner: FC<ISpinnerComponent & CircularProgressProps> = (props) => {
  const { title, containerClass, hidden = false } = props;

  const useStyles = makeStyles((theme) => {
    return {
      container: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translateY(-50%)",
        display: hidden ? "none" : "block",
      },
      progress: {
        color: theme.palette.primary.main,
      },
    };
  });
  const classes = useStyles();

  return (
    <div className={clsx(containerClass, classes.container)}>
      <CircularProgress className={classes.progress} {...props} color="secondary" />
      {title && <span>{title}</span>}
    </div>
  );
};
