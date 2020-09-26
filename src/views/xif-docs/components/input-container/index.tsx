import React, { FC } from 'react';
import clsx from 'clsx';
import { useStyles } from './input-container.style';

export interface IInputContainer {
  visible: boolean;
  className?: string;
}

export const InputContainer: FC<IInputContainer> = ({ children, visible, className }) => {
  const classes = useStyles();

  return visible ? <div className={clsx(classes.root, className)}>{children}</div> : <></>;
};
