import React, { lazy, FC, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import App from "views/layout";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { defaultRequest } from "helpers";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import * as Theme from "theme";
import { IHeaderStore } from "components/layout/header/store/header.reducer";
import { useUser } from "hooks";

interface IRoutes {
  header: IHeaderStore;
}

const Routes: FC<IRoutes> = ({ header }) => {
  const Login = lazy(() => import("views").then((module) => ({ default: module.Login })));
  const Asan = lazy(() => import("views/login/asan").then((module) => ({ default: module.Asan })));

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

const mapstatetoProps = (state: IAppState) => ({ header: state.header });
export default connect(mapstatetoProps)(Routes);
