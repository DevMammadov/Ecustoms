import { faSkullCrossbones } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Paper } from "@material-ui/core";
import { useTranslator } from "localization";
import React, { FC } from "react";
import { useStyles } from "./goods-start-page.style";

export interface IGoodsStartPage {
  onAddClick(): void;
}

export const GoodsStartPage: FC<IGoodsStartPage> = ({ onAddClick }) => {
  const lang = useTranslator();
  const classes = useStyles();

  return (
    <Grid className={classes.container} component={Paper} container>
      <Grid item xs={12}>
        <div className={classes.titleContainer}>
          <FontAwesomeIcon className={classes.icon} icon={faSkullCrossbones} />
          <div className={classes.textContainer}>{lang.noAddedGoods}</div>
        </div>
        <div>
          <Button onClick={() => onAddClick()} className={classes.button} variant="contained" color="primary">
            {lang.addNewGood}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
