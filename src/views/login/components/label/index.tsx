import { makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

interface ILabelComponent {
  title?: string;
  text: string;
}

export const Label: FC<ILabelComponent> = ({ text, title }) => {
  const useStyles = makeStyles((theme) => {
    return {
      title: {
        fontWeight: "bold",
        fontSize: ".8rem",
      },
      text: {
        fontSize: ".8rem",
      },
    };
  });
  const classes = useStyles();
  return (
    <Typography component="div">
      {title && (
        <Typography className={classes.title} component="span">
          {title}
        </Typography>
      )}
      <Typography className={classes.text} component="span">
        {"  "}
        {text}
      </Typography>
    </Typography>
  );
};
