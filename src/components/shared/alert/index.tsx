import React, { FC, useState } from "react";
import { useStyles } from "./alert.style";
import { Collapse, IconButton } from "@material-ui/core";
import AlertTitle from "@material-ui/lab/AlertTitle/AlertTitle";
import { Alert as MuiAlert, AlertProps } from "@material-ui/lab/";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";

interface IClasses {
  alert?: string;
  title?: string;
  content?: string;
  icon?: string;
  root?: string;
}

interface IAlert {
  open?: boolean;
  onClose?(): void;
  titleContent?: any;
  text?: any;
  collapsable?: boolean;
  className?: string;
  classes?: IClasses;
}

export const Alert: FC<IAlert & AlertProps> = ({
  open,
  onClose = () => {},
  titleContent,
  text,
  collapsable = true,
  className,
  classes,
  ...rest
}) => {
  const styles = useStyles();
  const [alertOpen, setOpen] = useState<boolean>(open ? open : true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Collapse in={alertOpen} className={clsx(className, classes?.root)}>
      <MuiAlert
        className={clsx(classes?.alert)}
        classes={{ message: styles.alertMessage, action: styles.alertAction }}
        action={
          collapsable ? (
            <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          ) : null
        }
        {...rest}
      >
        {titleContent && <AlertTitle className={clsx(classes?.title)}>{titleContent}</AlertTitle>}
        {text && <div className={clsx(classes?.content)}>{text}</div>}
      </MuiAlert>
    </Collapse>
  );
};
