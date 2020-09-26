import React, { FC } from "react";
import { useStyles } from "./dec-info-card.style";
import { useTranslator } from "localization";
import { Card, List, ListItem } from "@material-ui/core";
import clsx from "clsx";

export interface IDecInfoCard {
  values?: any[];
  labels?: any[];
  title?: string;
  className?: string;
  renderContent?: any;
}

export const DecInfoCard: FC<IDecInfoCard> = ({ labels = [], values = [], title, className, renderContent }) => {
  const lang = useTranslator();
  const classes = useStyles();

  return (
    <Card variant="outlined" className={clsx(classes.card, className)}>
      <span className={classes.title}>{title}</span>
      {renderContent ? (
        renderContent()
      ) : (
        <List className={classes.list}>
          {labels.map((lb, i) => (
            <ListItem key={i} className={classes.listItem}>
              <div> {lb} </div> <div> {values[i]} </div>
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
};
