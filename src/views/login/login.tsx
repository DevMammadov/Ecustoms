import { Grid, Typography } from "@material-ui/core";
import logo from "assets/logo-big.png";
import React, { FC, useEffect } from "react";
import { useStyles } from "./login.style";
import { LoginForm, ILoginData, Sertificates, Label } from "./components";
import { IAppState } from "store/reducers";
import { userActions } from "./store/action";
import { connect } from "react-redux";
import { ISendToken } from "types";
import { IUserState } from "./store/reducer";
import { useHistory } from "react-router";
import { Lang } from "components/layout/header/components";
import { headerActions } from "components/layout/header/store/header.actions";
import { useTranslator } from "localization";

interface ILogin {
  sendToken(payload: ISendToken): void;
  setSertificate(number: string): void;
  changeLang(lang: string): void;
  user: IUserState;
  selectedLang: string;
}

const Login: FC<ILogin> = ({ sendToken, setSertificate, user, selectedLang, changeLang }) => {
  const classes = useStyles();
  const history = useHistory();
  const lang = useTranslator("login");

  useEffect(() => {
    if (user.asanToken && user.sertificates.length <= 0) {
      history.push("/asan");
    }
    if (user.localToken && !user.pageLoading && user.selectedSertificate) {
      history.push("/");
    }
  }, [user.asanToken, user.localToken, user.pageLoading, history, user.sertificates.length, user.selectedSertificate]);

  const handleLogin = (data: ILoginData) => {
    console.log(data);
  };

  const handleSertificateSelect = (voen: string, number: string) => {
    sendToken({ token: user.asanToken, voen: voen });
    setSertificate(number);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.aside} xs={3}>
        <Typography component="div" className={classes.asideContent}>
          <Typography component="div">
            <img draggable="false" src={logo} alt="" />
            <Typography component="div" className={classes.asideTitle}>
              <h3>{lang.eCustomsServices}</h3>
              <span>{lang.asideText}</span>
            </Typography>
          </Typography>
          <Typography component="div">
            <Label title={lang.address} text={lang.ourAddress} />
            <Label title={lang.phone} text="+994 (12) 404 22 00" />
            <Label title={lang.mail} text="international@customs.gov.az" />
            <Label title={lang.webSite} text="www.ecustoms.gov.az" />
          </Typography>
        </Typography>
      </Grid>
      <Grid item className={classes.main} xs={9}>
        <Typography className={classes.header} component="div">
          <Lang selected={selectedLang} changeLang={(lang) => changeLang(lang)} className={classes.lang} />
        </Typography>
        <Typography component="div" className={classes.mainContent}>
          <Typography component="div" className={classes.loginForm}>
            {!user.asanToken && <LoginForm onLoginClick={() => history.push("/asan")} onFormSubmit={handleLogin} />}
            {user.sertificates.length > 0 && (
              <Sertificates list={user.sertificates} loading={user.pageLoading} onSelect={handleSertificateSelect} />
            )}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ user: state.user, selectedLang: state.header.lang });
export default connect(mapStateToProps, { ...userActions, ...headerActions })(Login);
