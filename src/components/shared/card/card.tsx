import React, { FC } from "react";
import { Card as MuiCard, IconButton, CardContent, CardMedia, Avatar } from "@material-ui/core";
import { useStyles } from "./card.style";
import clsx from "clsx";
import { Tooltip } from "@material-ui/core";
import * as MIcon from "@fortawesome/pro-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICard } from "views/cards/types";
import { faFilmAlt, faFileContract, faLockAlt, faStar } from "@fortawesome/pro-solid-svg-icons";
import { faStar as faStarOutlined } from "@fortawesome/pro-light-svg-icons";

interface ICardPage {
  onClick(id: number): void;
  onFavClick(id: number, favorite: boolean): void;
  className?: string;
  card: ICard;
  showFavoriteCard?: boolean;
  favorite?: boolean;
}

export const Card: FC<ICardPage> = ({ card, onClick, className, favorite = false, onFavClick, showFavoriteCard }) => {
  const classes = useStyles();

  const findIcon = (name: string, swap: boolean) => {
    return MIcon[name.trim() as keyof typeof MIcon] as IconProp;
  };

  return (
    <MuiCard variant="outlined" className={clsx(classes.container, className)}>
      <CardMedia className={classes.cardMedia}>
        <Avatar onClick={() => onClick(card.id)} className={classes.avatar} style={{ color: card.color }}>
          <FontAwesomeIcon icon={findIcon(card.icon, card.swapIcon)} />
        </Avatar>
      </CardMedia>
      <CardContent className={classes.content}>
        <div className={classes.cardContent} style={{ cursor: "pointer" }}>
          <div>
            <h3 onClick={() => onClick(card.id)} className={classes.title}>
              {card.title}
            </h3>
            {showFavoriteCard && (
              <IconButton disableRipple className={classes.bookMark} onClick={() => onFavClick(card.id, favorite)}>
                {favorite ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={faStarOutlined} />}
              </IconButton>
            )}
          </div>
          <span className={classes.description}>{card.description}</span>
        </div>
        <div className={classes.icons}>
          <IconButton className={classes.mediaIcon}>
            <FontAwesomeIcon icon={faFileContract} />
          </IconButton>
          <IconButton className={classes.mediaIcon}>
            <FontAwesomeIcon icon={faFilmAlt} />
          </IconButton>
          <IconButton className={classes.mediaIcon}>
            <FontAwesomeIcon icon={faLockAlt} />
          </IconButton>
        </div>
      </CardContent>
    </MuiCard>
  );
};
