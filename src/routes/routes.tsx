import React, { lazy, FC } from "react";
import { Route, Switch } from "react-router-dom";
import App from "views/layout";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { defaultRequest } from "helpers";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import * as Theme from "theme";
import { IHeaderStore } from "components/layout/header/store/header.reducer";
import { IUserState } from "views/login/store/reducer";

interface IRoutes {
  user: IUserState;
  header: IHeaderStore;
}

const Routes: FC<IRoutes> = ({ header, user }) => {
  const Login = lazy(() => import("views").then((module) => ({ default: module.Login })));
  const Asan = lazy(() => import("views").then((module) => ({ default: module.Asan })));

  if (!defaultRequest.defaults.headers["localToken"]) {
    defaultRequest.defaults.headers["localToken"] = user.localToken;
  }

  defaultRequest.defaults.headers["lang"] = header.lang;

  return (
    <ThemeProvider theme={Theme[header.theme as keyof typeof Theme]}>
      <CssBaseline />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/asan" component={Asan} />
        <Route path="/" component={App} />
      </Switch>
    </ThemeProvider>
  );
};

const mapstatetoProps = (state: IAppState) => ({ user: state.user, header: state.header });
export default connect(mapstatetoProps)(Routes);
