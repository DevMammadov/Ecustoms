import React, { FC } from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { useStyles } from "./notify-list.style";
import { INotify } from "views/notifications/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarker } from "@fortawesome/pro-light-svg-icons";
import Pagination from "@material-ui/lab/Pagination";

import moment from "moment";

interface INotifyList {
  data: INotify[];
  count?: number;
  onPaginate(page: number): void;
  currentPage?: number;
}

export const NotifyList: FC<INotifyList> = ({ data, count = 1, onPaginate, currentPage = 1 }) => {
  const classes = useStyles();

  const renderPrimaryText = (notify: INotify) => {
    return (
      <div className={classes.textPrimary}>
        <b>{notify.objCode}</b>
        <div>{notify.infoText}</div>
      </div>
    );
  };

  const rendersecondaryText = (notify: INotify) => {
    return (
      <span>
        <span>
          <FontAwesomeIcon className={classes.calendarIcon} icon={faCalendarAlt} />
          {moment(notify.insertDate).format("DD.MM.YYYY")}
        </span>
        <span>
          <FontAwesomeIcon className={classes.markerIcon} icon={faMapMarker} />
          {notify.infoType}
        </span>
      </span>
    );
  };

  const renderAvatar = (infoType?: string) => {
    const infoTypeArr: any = infoType?.split(" ") || [];
    if (infoTypeArr.length > 1) {
      return `${infoTypeArr[0][0]}${infoTypeArr[1][0]}`.toUpperCase();
    } else if (infoTypeArr.length === 1) {
      return `${infoTypeArr[0][0]}${infoTypeArr[0][1]}`.toUpperCase();
    } else {
      return "";
    }
  };

  return (
    <div className={classes.listContainer}>
      <List className={classes.listRoot}>
        {data?.map((notify: INotify, index: number) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>{renderAvatar(notify.infoType)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={renderPrimaryText(notify)} secondary={rendersecondaryText(notify)} />
          </ListItem>
        ))}
      </List>
      {count > 1 && (
        <Pagination
          onChange={(e: object, page: number) => onPaginate(page)}
          page={currentPage}
          count={count}
          className={classes.pagination}
        />
      )}
    </div>
  );
};
