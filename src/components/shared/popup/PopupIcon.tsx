import React, { FC } from "react";
import Icon from "@material-ui/core/Icon";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { useStyles } from "./popup.style";

export interface IPopupIcon {
  type?: string;
  icon?: string;
}

export const PopupIcon: FC<IPopupIcon> = ({ type, icon }) => {
  const classes = useStyles();
  const renderIcon = (typpe: string) => {
    switch (type) {
      case "remove":
        return <DeleteOutlineOutlinedIcon className={classes.icon} />;
      case "info":
        return <InfoOutlinedIcon className={classes.icon} />;
      default:
        return <InfoOutlinedIcon className={classes.icon} />;
    }
  };

  return type ? renderIcon(type) : <Icon className={classes.icon}> {icon} </Icon>;
};
