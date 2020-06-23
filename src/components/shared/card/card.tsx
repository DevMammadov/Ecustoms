import React, { useState, FC } from "react";
import { Card as MaterialCard, IconButton, Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { useStyles } from "./card.style";
import clsx from "clsx";
import { Tooltip, MenuItem } from "@material-ui/core";
import * as MIcon from "@fortawesome/pro-duotone-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/pro-light-svg-icons";
import { ICard } from "views/cards/types";
import { faBookmark, faFilmAlt, faCommentAltDots, faFileContract } from "@fortawesome/pro-solid-svg-icons";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { stringCutter } from "helpers";
import { useTranslator } from "localization";

interface ICardPage {
  onClick(id: number): void;
  className?: string;
  card: ICard;
}

export const Card: FC<ICardPage> = ({ card, onClick, className }) => {
  const classes = useStyles();
  const lang = useTranslator("cards");
  const [reverse, setReverse] = useState<boolean>(false);

  const findIcon = (name: string, className: string, swap: boolean) => {
    return (
      name && (
        <div className={classes.iconContaioner}>
          <FontAwesomeIcon
            className={className}
            swapOpacity={swap}
            icon={MIcon[name.trim() as keyof typeof MIcon] as IconProp}
          />
        </div>
      )
    );
  };

  const handleCardFlip = (e: any) => {
    e.stopPropagation();
    setReverse(!reverse);
  };

  return (
    <div className={clsx(classes.cardContainer, className)}>
      <div className={clsx(classes.card, reverse && classes.reverse)}>
        <Tooltip title={card.title} disableHoverListener={card.title.length < 60} arrow>
          <MaterialCard onClick={() => onClick(card.id)} className={classes.cardFront}>
            <IconButton onClick={(e) => handleCardFlip(e)} className={classes.flipIcon}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </IconButton>
            {findIcon(card.icon, classes.cardIcon, card.swapIcon)}
            <Typography variant="body2" component="span">
              {card.title.length > 60 ? `${card.title.slice(0, 60)}...` : card.title}
            </Typography>
          </MaterialCard>
        </Tooltip>
        <MaterialCard className={classes.cardBack}>
          <CardHeader
            classes={{ title: classes.headerTitle, root: classes.cardHeader, action: classes.headerAction }}
            action={
              <IconButton onClick={() => setReverse(!reverse)}>
                <FontAwesomeIcon icon={faEllipsisH} />
              </IconButton>
            }
            title={stringCutter(card.title, 30)}
          />

          <div>
            <MenuList className={classes.listContainer}>
              <div className={classes.menuItemContainer}>
                <MenuItem button component="a">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faBookmark} className={classes.listIcon} />
                  </ListItemIcon>
                  <Typography variant="inherit">{lang.instruction}</Typography>
                </MenuItem>
                <MenuItem button component="a">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faFilmAlt} className={classes.listIcon} />
                  </ListItemIcon>
                  <Typography variant="inherit">{lang.videoInstructions}</Typography>
                </MenuItem>
              </div>
              <div className={classes.menuItemContainer}>
                <MenuItem button component="a">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faFileContract} className={classes.listIcon} />
                  </ListItemIcon>
                  <Typography variant="inherit" noWrap>
                    {lang.Regulation}
                  </Typography>
                </MenuItem>
                <MenuItem button component="a">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faCommentAltDots} className={classes.listIcon} />
                  </ListItemIcon>
                  <Typography variant="inherit" noWrap>
                    {lang.feedback}
                  </Typography>
                </MenuItem>
              </div>
            </MenuList>
          </div>
        </MaterialCard>
      </div>
    </div>
  );
};
