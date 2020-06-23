import { RouterState, connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import cards, { ICardStore } from "views/cards/sotre/reducer";
import user, { IUserState } from "views/login/store/reducer";
import myInfo, { IMyInfoState } from "views/myInfo/store/reducer";
import permissions, { IPermissionsState } from "views/giving-permissions/store/reducer";
import xifDocs, { IXifDocsState } from "views/xif-docs/store/reducer";
import notify, { INotifyState } from "views/notifications/store/reducer";
import header, { IHeaderStore } from "components/layout/header/store/header.reducer";
import { reducer as form } from "redux-form";

export default (history: any) =>
  combineReducers({
    cards,
    myInfo,
    permissions,
    xifDocs,
    user,
    header,
    notify,
    form,
    router: connectRouter(history),
  });

export interface IAppState {
  cards: ICardStore;
  myInfo: IMyInfoState;
  header: IHeaderStore;
  user: IUserState;
  router: RouterState;
  permissions: IPermissionsState;
  xifDocs: IXifDocsState;
  notify: INotifyState;
  addXifForm: any;
}
