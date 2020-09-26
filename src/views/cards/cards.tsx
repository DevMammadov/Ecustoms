import { Grid } from "@material-ui/core";
import { SectionHeader, Card, Spinner } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { IAppState } from "store/reducers";
import { CardActions } from "views/cards/sotre/action";
import { getLink } from "./card-links";
import { ICard } from "./types";
import { useTranslator } from "localization";
import { useStyles } from "./cards.style";
import { ICardState } from "./sotre/reducer";
import { useUser } from "hooks";

export interface ICards {
  match: any;
  cardsState: ICardState;
  getCards(type: string): void;
  setFavoriteCard({ cardId, status, parentCardType }: any): void;
}

const Cards: FC<ICards> = ({ cardsState, getCards, setFavoriteCard, match }) => {
  const lang = useTranslator("cards");
  const history = useHistory();
  const classes = useStyles();
  const currentUser = useUser();

  useEffect(() => {
    const filter = match.params.page ? match.params.page : "main";
    getCards(filter);
  }, [getCards, match.params.page]);

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
    const parentCardType = match.params.page ? match.params.page : "main";
    setFavoriteCard({ cardId: id, status: !favorite, parentCardType: parentCardType });
  };

  return (
    <Grid container style={{ opacity: cardsState.loading ? 0.5 : 1 }}>
      <SectionHeader title={match.params.page ? lang[match.params.page as keyof typeof lang] : lang.mainPage} />
      <Grid container className={classes.mainContent}>
        {cardsState.cards?.map((card: ICard) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={card.id} className={classes.cardContainer}>
            <Card
              onClick={cardClick}
              onFavClick={favCardClick}
              card={card}
              showFavoriteCard={currentUser.isLogin}
              favorite={cardsState.favorites?.includes(card.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Spinner hidden={!cardsState.loading} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  cardsState: state.cards,
});

export default connect(mapStateToProps, CardActions)(Cards);
