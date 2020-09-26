import { declarationSearchActions } from "./../../views/declaration-info/store/actions";
import { RouterState, connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import cards, { ICardState } from "views/cards/sotre/reducer";
import user, { IUserState } from "views/login/store/reducer";
import myInfo, { IMyInfoState } from "views/myInfo/store/reducer";
import permissions, { IPermissionsState } from "views/giving-permissions/store/reducer";
import xifDocs, { IXifDocsState } from "views/xif-docs/store/reducer";
import gooen, { IGooenState } from "views/gooen/store/reducer";
import notify, { INotifyState } from "views/notifications/store/reducer";
import header, { IHeaderStore } from "components/layout/header/store/header.reducer";
import { reducer as form } from "redux-form";
import postalServices, { IPostalServicesState } from "views/postal-services/store/reducer";
import cargo, { ICargoState } from "views/cargo/store/reducer";
import declarationInfo, { IDeclarationInfoState } from "views/declaration-info/store/reducer";
import declaration, { IDeclarationState } from "views/declaration/store/reducer";
import feedback, { IFeedbackState } from "views/feedback/store/reducer";
import postalDeclaration, { IPostDeclarationState } from "views/post-declaration/store/reducer";
import userPermissions, { IUserPermissionState } from "views/user-permissions/store/reducer";

export default (history: any) =>
  combineReducers({
    cards,
    myInfo,
    permissions,
    xifDocs,
    gooen,
    user,
    header,
    notify,
    postalServices,
    cargo,
    declarationInfo,
    declaration,
    form,
    feedback,
    postalDeclaration,
    userPermissions,
    router: connectRouter(history),
  });

export interface IAppState {
  cards: ICardState;
  myInfo: IMyInfoState;
  header: IHeaderStore;
  user: IUserState;
  router: RouterState;
  permissions: IPermissionsState;
  xifDocs: IXifDocsState;
  gooen: IGooenState;
  notify: INotifyState;
  postalServices: IPostalServicesState;
  cargo: ICargoState;
  declarationInfo: IDeclarationInfoState;
  declaration: IDeclarationState;
  feedback: IFeedbackState;
  postalDeclaration: IPostDeclarationState;
  userPermissions: IUserPermissionState;
}
