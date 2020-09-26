import React, { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faFilmAlt,
  faFileContract,
  faUnlock,
  faLock,
  faLockAlt,
  faLockOpenAlt,
  faExternalLinkSquareAlt,
} from "@fortawesome/pro-solid-svg-icons";
import { ListItem, List, Link, IconButton, Grid, Paper } from "@material-ui/core";
import * as MIcon from "@fortawesome/pro-duotone-svg-icons";
import { useStyles } from "./e-services.style";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { ICard } from "views/cards/types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SectionHeader } from "components/shared";
import { useTranslator } from "localization";
import { useHistory } from "react-router-dom";
import { getLink } from "views/cards/card-links";
import { CardActions } from "views/cards/sotre/action";
import { IList } from "./types";

const EServices: FC<IList> = ({ cardsState, getCards }) => {
  const classes = useStyles();
  const lang = useTranslator("eServices");
  const history = useHistory();

  useEffect(() => {
    getCards("all");
  }, [getCards]);

  return (
    <Grid container>
      <SectionHeader title={lang.eServices} />
      <Grid item xs={12}>
        <List>
          {cardsState.cards?.map((card: ICard) => (
            <ListItem component={Paper} key={card.id} className={classes.MuiListItemRoot}>
              <div>
                <FontAwesomeIcon
                  className={classes.swapIcon}
                  swapOpacity={card.swapIcon}
                  icon={MIcon[card.icon.trim() as keyof typeof MIcon] as IconProp}
                />
                <Link onClick={() => history.push(getLink(card.id))} className={classes.link}>
                  {card.title}
                </Link>
              </div>
              <div>
                <IconButton className={classes.MuiIconButtonRoot} disabled>
                  {card.auth === 0 ? (
                    <FontAwesomeIcon icon={faLockOpenAlt} className={classes.MuiSvgIconRoot} />
                  ) : (
                    <FontAwesomeIcon icon={faLockAlt} className={classes.MuiSvgIconRoot} />
                  )}
                </IconButton>
                <IconButton className={classes.MuiIconButtonRoot}>
                  <FontAwesomeIcon icon={faBookmark} />
                </IconButton>
                <IconButton className={classes.MuiIconButtonRoot}>
                  <FontAwesomeIcon icon={faFilmAlt} />
                </IconButton>
                <IconButton className={classes.MuiIconButtonRoot}>
                  <FontAwesomeIcon icon={faFileContract} />
                </IconButton>
                <IconButton className={classes.MuiIconButtonRoot}>
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  cardsState: state.cards,
});

export default connect(mapStateToProps, CardActions)(EServices);
