import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import { ProtectedRoute, Route } from "components/shared";
import { links } from "./links";

const CardPage = lazy(() => import("views").then((module) => ({ default: module.Cards })));
const MyInfo = lazy(() => import("views").then((module) => ({ default: module.MyInfo })));
const LoginRequired = lazy(() => import("views").then((module) => ({ default: module.LoginRequired })));
const GivingPermissions = lazy(() => import("views").then((module) => ({ default: module.GivingPermissions })));
const UnderConstruction = lazy(() => import("views").then((module) => ({ default: module.UnderConstruction })));
const Notifications = lazy(() => import("views").then((module) => ({ default: module.Notify })));
const XifDocs = lazy(() => import("views").then((module) => ({ default: module.XifDocs })));
const XifAddUpdate = lazy(() => import("views/xif-docs/layouts").then((module) => ({ default: module.AddXifDoc })));
const Gooen = lazy(() => import("views").then((module) => ({ default: module.Gooen })));
const PostalServices = lazy(() => import("views").then((module) => ({ default: module.PostalServices })));
const PostalServicesAddXml = lazy(() =>
  import("views/postal-services/layout").then((module) => ({
    default: module.AddXml,
  }))
);
const Cargo = lazy(() => import("views/cargo").then((module) => ({ default: module.Cargo })));
const CargoAddXml = lazy(() =>
  import("views/cargo/layout/add-xml").then((module) => ({
    default: module.default,
  }))
);

const DeclarationInfo = lazy(() =>
  import("views/declaration-info").then((module) => ({
    default: module.DeclarationInfo,
  }))
);
const Info = lazy(() =>
  import("views/declaration-info/").then((module) => ({
    default: module.Info,
  }))
);
const EServices = lazy(() => import("views/e-services").then((module) => ({ default: module.EServices })));
const Declaration = lazy(() => import("views/declaration").then((module) => ({ default: module.Declaration })));
const Feedback = lazy(() => import("views/feedback").then((module) => ({ default: module.Feedback })));
const PostDeclarations = lazy(() => import("views").then((module) => ({ default: module.PostDeclaration })));
const AddPostDeclaration = lazy(() => import("views").then((module) => ({ default: module.AddDeclaration })));
const FavoriteCards = lazy(() => import("views/favorite-cards").then((module) => ({ default: module.FavoriteCards })));
const UserPermissions = lazy(() => import("views").then((module) => ({ default: module.UserPermissions })));
const AddPermission = lazy(() =>
  import("views/user-permissions/layout").then((module) => ({ default: module.AddPermission }))
);

export const AppRouter = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/my-info/:tab?" component={MyInfo} />
      <ProtectedRoute exact path="/giving-permissions/:manage?/:pin?" stampRequired component={GivingPermissions} />
      <ProtectedRoute exact path={links.XifDoc.baseUrl} voenRequired component={XifDocs} />
      <ProtectedRoute exact path={links.XifDoc.add} voenRequired component={XifAddUpdate} />
      <ProtectedRoute exact path="/xif-docs/:page/:id" voenRequired component={XifAddUpdate} />
      <ProtectedRoute exact path="/notifications" component={Notifications} />
      <ProtectedRoute exact path={links.Cargo.baseUrl} component={Cargo} />
      <ProtectedRoute exact path={links.Cargo.add} component={CargoAddXml} />
      <ProtectedRoute exact path={links.PostalServices.baseUrl} component={PostalServices} />
      <ProtectedRoute exact path={links.PostalServices.add} component={PostalServicesAddXml} />
      <ProtectedRoute exact path={links.PostalDeclaration.baseUrl} component={PostDeclarations} />
      <ProtectedRoute exact path={links.PostalDeclaration.add} component={AddPostDeclaration} />
      {/* <Route exact path={links.Declaration.baseUrl} component={Declaration} /> */}
      <Route exact path={links.Gooen.baseUrl} component={Gooen} />
      <Route exact path={links.Feedback.baseUrl} component={Feedback} />
      <ProtectedRoute exact path={links.FavoriteCards.baseUrl} component={FavoriteCards} />
      <Route exact path="/login-required" component={LoginRequired} />
      <Route exact path="/under-construction/:page?" component={UnderConstruction} />
      <Route exact path="/e-services" component={EServices} />
      <Route exact path={links.DeclarationInfo.baseUrl} component={DeclarationInfo} />
      <Route exact path={links.DeclarationInfo.info} component={Info} />
      <ProtectedRoute stampRequired exact path={links.UserPermissions.baseUrl} component={UserPermissions} />
      <ProtectedRoute stampRequired exact path={links.UserPermissions.add} component={AddPermission} />

      <Route exact path="/:page?" component={CardPage} />
    </Switch>
  );
};
