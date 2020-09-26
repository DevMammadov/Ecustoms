import { Grid, Paper } from "@material-ui/core";
import { SectionHeader, Card, Spinner } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { IAppState } from "store/reducers";
import { CardActions } from "views/cards/sotre/action";
import { getLink } from "../cards/card-links";
import { ICard } from "../cards/types";
import { useTranslator } from "localization";
import { useStyles } from "../cards/cards.style";
import { ICardState } from "../cards/sotre/reducer";
import { useUser } from "hooks";

export interface ICards {
  match: any;
  cardsState: ICardState;
  getFavoriteCards(): void;
  setFavoriteCard({ cardId, status, parentCardType, page }: any): void;
}

const FavoriteCards: FC<ICards> = ({ cardsState, getFavoriteCards, setFavoriteCard, match }) => {
  const lang = useTranslator("cards");
  const history = useHistory();
  const classes = useStyles();
  const currentUser = useUser();

  useEffect(() => {
    getFavoriteCards();
  }, []);

  const cardClick = (id: number) => {
    const card: ICard = cardsState.cards?.filter((card: ICard) => card.id === id)[0];

    if (cardsState.loading) return;
    if (card.auth === 1) {
      history.push(getLink(card.id));
    } else {
      history.push(getLink(card.id));
    }
  };

  const favCardClick = (id: number, favorite: boolean) => {
    setFavoriteCard({ cardId: id, status: !favorite, parentCardType: "favoriteCards" });
  };

  return (
    <Grid container style={{ opacity: cardsState.loading ? 0.5 : 1 }}>
      <SectionHeader title={lang.favoriteCards} />
      <Grid container className={classes.mainContent}>
        {cardsState.cards.length !== 0 ? (
          cardsState.cards?.map((card: ICard) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={card.id} className={classes.cardContainer}>
              <Card
                onClick={cardClick}
                onFavClick={favCardClick}
                card={card}
                showFavoriteCard={currentUser.isLogin}
                favorite={true}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} component={Paper} className={classes.nonFavorite}>
            <span>{lang.nonFavorite}</span>
          </Grid>
        )}
      </Grid>
      <Spinner hidden={!cardsState.loading} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  cardsState: state.cards,
});

export default connect(mapStateToProps, CardActions)(FavoriteCards);
