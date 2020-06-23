import React, { FC } from "react";
import { useStyles } from "./list.style";
import { TextField } from "components/shared";

export interface IKeys {
  name: string;
  title: string;
}

interface IList {
  keys: IKeys[];
  values?: object;
}

export const List: FC<IList> = ({ keys, values }) => {
  const classes = useStyles();

  return (
    <div>
      {values
        ? keys.map((key: IKeys, index: number) => (
            <TextField
              //classes={{ input: classes.inputText, label: classes.inputTextLabel }}
              className={classes.input}
              name={key.title}
              key={index}
              label={key.title}
              multiline
              disabled
              value={values[key.name as keyof typeof values] ? values[key.name as keyof typeof values] : ""}
            />
          ))
        : keys.map((key: IKeys, index: number) => (
            <div className={classes.statusRows} key={index}>
              {key.title}
            </div>
          ))}
    </div>
  );
};
