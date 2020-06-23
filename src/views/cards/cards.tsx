//import { useStyles } from "./cards.style";
import { Grid } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { IAppState } from "store/reducers";
import { getCards } from "views/cards/sotre/action";
import { userActions } from "views/login/store/action";
import { getLink } from "./card-links";
import { CardView } from "./components";
import { ICard } from "./types";
import { useTranslator } from "localization";

export interface ICards {
  match: any;
  cards: any[];
  getCards(type: string): void;
}

const Cards: FC<ICards> = ({ match, cards, getCards }) => {
  //const classes = useStyles()
  const lang = useTranslator("cards");
  const history = useHistory();

  useEffect(() => {
    const filter = match.params.page ? match.params.page : "main";
    getCards(filter);
  }, [getCards, match.params.page]);

  const cardClick = (id: number) => {
    const card: ICard = cards.filter((card: ICard) => card.id === id)[0];

    if (card.auth === 1) {
      history.push(getLink(card.title));
    } else {
      //history.push(getLink(card.title));
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <SectionHeader
          title={
            match.params.page
              ? lang[match.params.page as keyof typeof lang]
              : lang.mainPage
          }
        />
      </Grid>
      <CardView list={cards} cardClick={cardClick} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  ...state.cards,
  ...state.user,
});
export default connect(mapStateToProps, { getCards, ...userActions })(Cards);
