import { faBell, faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, IconButton, Link, ListItemAvatar, ListItemText } from "@material-ui/core";
import { useTranslator } from "localization";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./notify.style";
import { StyledBadge } from "./styled-badge";
import { StyledMenu, StyledMenuItem } from "./styled-menu";
import { INotify } from "views/notifications/types";
import { Spinner } from "components/shared";
import { stringCutter } from "helpers";
import { links } from "routes";
import clsx from "clsx";

interface IProps {
  className?: string;
  data: INotify[];
  type: "sms" | "notify";
  onClick?(): void;
  loading?: boolean;
  count?: number;
}

export const Notify: FC<IProps> = ({ data, className, type, onClick = () => {}, count = 0, loading }) => {
  const classes: any = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const lang = useTranslator("header");

  const renderIcon = (mode: "sms" | "notify") => {
    return mode === "notify" ? faBell : faEnvelope;
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    onClick();
  };

  const handleLookAll = () => {
    history.push(links.Notifications.baseUrl);
    setAnchorEl(null);
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
    <div>
      <IconButton onClick={handleClick} className={`${classes.messageBox} ${className}`}>
        <StyledBadge badgeContent={count} color="primary">
          <FontAwesomeIcon className={classes.icon} swapOpacity={false} icon={renderIcon(type)} />
        </StyledBadge>
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <StyledMenuItem disableRipple disabled className={classes.notifyHeader}>
          <ListItemText>
            <FontAwesomeIcon className={classes.headerIcon} swapOpacity={false} icon={renderIcon(type)} />
            {lang[type]}
          </ListItemText>
        </StyledMenuItem>
        <div className={classes.notifyBody}>
          {loading ? (
            <Spinner />
          ) : (
            data?.map((notify: INotify, index: number) => (
              <StyledMenuItem key={index} className={clsx(notify.readed === "0" && classes.readedNotify)}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" className={classes.green}>
                    {renderAvatar(notify?.infoType)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={notify.objCode} secondary={stringCutter(notify.infoText, 50)} />
              </StyledMenuItem>
            ))
          )}
        </div>
        <StyledMenuItem className={classes.lastItem}>
          <ListItemText>
            <Link underline="none" onClick={handleLookAll}>
              {lang.lookAll || ""}
            </Link>
          </ListItemText>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
