import React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "components/shared";
import { useStyles } from "../../cards.style";
import { ICard } from "../../types";

export interface CardViewProps {
  cardClick(id: number): void;
  list: ICard[];
}

export const CardView = ({ list, cardClick }: CardViewProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContent}>
      {list?.map((card: ICard) => (
        <Grid item xs={12} sm={6} md={3} key={card.id} className={classes.cardContainer}>
          <Card onClick={cardClick} card={card} />
        </Grid>
      ))}
    </Grid>
  );
};
