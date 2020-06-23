import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/pro-solid-svg-icons";
import { useHistory } from "react-router";

export const LoginButton: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Button onClick={() => history.push("/login")} className={classes.loginButton} variant="contained" color="primary">
      <FontAwesomeIcon icon={faSignInAlt} className={classes.loginIcon} />
      Daxil ol
    </Button>
  );
};
