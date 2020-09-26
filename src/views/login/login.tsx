import { Grid, Typography } from "@material-ui/core";
import logo from "assets/logo-big.png";
import React, { FC, useEffect } from "react";
import { useStyles } from "./login.style";
import { LoginForm, ILoginData, Sertificates, Label } from "./components";
import { IAppState } from "store/reducers";
import { userActions } from "./store/action";
import { connect } from "react-redux";
import { ISendToken } from "types";
import { useHistory } from "react-router";
import { Lang } from "components/layout/header/components";
import { headerActions } from "components/layout/header/store/header.actions";
import { useTranslator } from "localization";
import { useUser } from "hooks";
import { setToStorage } from "helpers/storage";

interface ILogin {
  sendToken(payload: ISendToken): void;
  getUser(): void;
  changeLang(lang: string): void;
  selectedLang: string;
  //getCertificaes(): void;
}

const Login: FC<ILogin> = ({ sendToken, selectedLang, changeLang, getUser }) => {
  const classes = useStyles();
  const history = useHistory();
  const currentUser = useUser();
  const lang = useTranslator("login");

  const handleLogin = (data: ILoginData) => {
    console.log(data);
  };

  const handleSertificateSelect = (voen: string, number: string) => {
    sendToken({ token: currentUser.asanToken, voen: voen });
    setToStorage("selectedSert", currentUser.sertificates.filter((c) => c.certificateNumber === number)[0]);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.aside} xs={3} sm={4} md={4} lg={3}>
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
            <Label title={lang.webSite} text="www.e.customs.gov.az" />
          </Typography>
        </Typography>
      </Grid>
      <Grid item className={classes.main} xs={12} sm={12} md={8} lg={9}>
        <Typography className={classes.header} component="div">
          <Lang selected={selectedLang} changeLang={(lang) => changeLang(lang)} className={classes.lang} />
        </Typography>
        <Typography component="div" className={classes.mainContent}>
          <Typography component="div" className={classes.mobileHeader}>
            <img draggable="false" src={logo} alt="" />
            <Typography component="div">
              <h3>{lang.eCustomsServices}</h3>
            </Typography>
          </Typography>
          <Typography component="div" className={classes.loginForm}>
            {!currentUser.localToken && currentUser.sertificates.length === 0 && (
              <LoginForm onLoginClick={() => getUser()} onFormSubmit={handleLogin} />
            )}
            {currentUser.sertificates.length > 0 && (
              <Sertificates
                list={currentUser.sertificates}
                loading={currentUser.pageLoading}
                onSelect={handleSertificateSelect}
              />
            )}
          </Typography>
          <Typography component="div" className={classes.mobileFooter}>
            <Label title={lang.address} text={lang.ourAddress} />
            <Label title={lang.phone} text="+994 (12) 404 22 00" />
            <Label title={lang.mail} text="international@customs.gov.az" />
            <Label title={lang.webSite} text="www.e.customs.gov.az" />
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ selectedLang: state.header.lang });
export default connect(mapStateToProps, { ...userActions, ...headerActions })(Login);
