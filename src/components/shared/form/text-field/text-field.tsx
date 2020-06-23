import React, { FC } from 'react';
import { TextField as MaterialTextField, TextFieldProps } from '@material-ui/core';
import { useStyles } from './text-field.style';

interface ReduxFormProps {
  errorText?: any;
}

export const TextField: FC<TextFieldProps & ReduxFormProps> = ({ errorText, ...rest }) => {
  const classes = useStyles();

  return (
    <MaterialTextField
      classes={{
        root: classes.root,
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
};
