import React from "react";
import { Grid, Paper } from "@material-ui/core";
import listImg from "assets/list.png";
import { useStyles } from "../../xif-docs.style";
import { useTranslator } from "localization";
import { Button } from "components/shared/form";

export const StartPage = ({ onClick }: { onClick(): void }) => {
  const classes = useStyles();
  const lang = useTranslator("xifDocs");

  return (
    <Grid item xs={12} className={classes.startPage} component={Paper}>
      <img src={listImg} alt="" draggable={false} />
      <p> {lang.noXifDoc} </p>
      <Button variant="contained" color="primary" onClick={() => onClick()}>
        {lang.addXifDoc}
      </Button>
    </Grid>
  );
};
