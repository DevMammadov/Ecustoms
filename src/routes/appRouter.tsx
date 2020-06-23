import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "components/shared";
import { useStyles } from "./router.style";

const CardPage = lazy(() => import("views").then((module) => ({ default: module.Cards })));
const MyInfo = lazy(() => import("views").then((module) => ({ default: module.MyInfo })));
const LoginRequired = lazy(() => import("views").then((module) => ({ default: module.LoginRequired })));
const GivingPermissions = lazy(() => import("views").then((module) => ({ default: module.GivingPermissions })));
const Construction = lazy(() => import("views").then((module) => ({ default: module.UConstruction })));
const Notifications = lazy(() => import("views").then((module) => ({ default: module.Notify })));
const XifDocs = lazy(() => import("views").then((module) => ({ default: module.XifDocs })));

export const AppRouter = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Switch>
        <ProtectedRoute exact path="/my-info/:tab?" component={MyInfo} />
        <ProtectedRoute exact path="/giving-permissions/:manage?/:pin?" component={GivingPermissions} />
        <ProtectedRoute exact path="/xif-docs/:page?/:id?" component={XifDocs} />
        <ProtectedRoute exact path="/notifications" component={Notifications} />
        <Route exact path="/login-required" component={LoginRequired} />
        <Route exact path="/construction/:page?" component={Construction} />
        <Route exact path="/:page?" component={CardPage} />
      </Switch>
    </section>
  );
};
