import React from "react";
import { Grid, Button } from "@material-ui/core";
import listImg from "assets/list.png";
import { useStyles } from "../giving-permissions.style";
import { useHistory } from "react-router-dom";
import { useTranslator } from "localization";

export const StartPage = ({ onClick }: any) => {
  const classes = useStyles();
  const lang = useTranslator("givingPermission");
  const history = useHistory();

  const handleClick = () => {
    onClick();
    console.log("hi");
    history.push("/giving-permissions/manage");
  };

  return (
    <Grid item xs={12} className={classes.startPage}>
      <img src={listImg} alt="" draggable={false} />
      <p> {lang.noOneGivenPowerOfUser} </p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        {lang.add}
      </Button>
    </Grid>
  );
};
