import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles } from "./popup.style";
import { PopupIcon } from "./PopupIcon";
import { useTranslator } from "localization";

export interface IPopup {
  allowButton?: boolean;
  denyButton?: boolean;
  onAllow?(data?: any): void;
  onDeny?(data?: any): void;
  title?: string;
  content?: string;
  type?: "info" | "remove" | string;
  icon?: string;
}

export const Popup: FC<IPopup & DialogProps> = (props) => {
  const { allowButton = true, denyButton = true, type = "info" } = props;
  const classes = useStyles();
  const lang = useTranslator("main");
  return (
    <Dialog
      classes={{ paper: classes.popupContainer }}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={classes.iconContainer}>
        <PopupIcon type={type} icon={props.icon} />
      </div>
      {props.title && <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>}
      {props.content && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{props.content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions className={classes.popupActions}>
        {denyButton && (
          <Button onClick={props.onDeny} color="primary">
            {lang.deny}
          </Button>
        )}
        {allowButton && (
          <Button onClick={props.onAllow} color="primary" variant="contained">
            {lang.agree}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
