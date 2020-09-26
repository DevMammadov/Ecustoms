import { faSignInAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { useTranslator } from "localization";
import React, { FC } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useStyles } from "./button.style";

export const LoginButton: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const lang = useTranslator("main");
  const location = useLocation();

  const handleLogin = () => {
    localStorage.setItem("login-origin", location.pathname);
    history.push("/login");
  };

  return (
    <Button onClick={handleLogin} className={classes.loginButton} variant="contained" color="primary">
      <FontAwesomeIcon icon={faSignInAlt} className={classes.loginIcon} />
      {lang.login}
    </Button>
  );
};
