import { all, take } from "redux-saga/effects";
import { cardsSaga } from "views/cards/sotre/saga";
import { permissionsSaga } from "views/giving-permissions/store/saga";
import { loginSaga } from "views/login/store/saga";
import { myInfoSaga } from "views/myInfo/store/saga";
import { xifDocsSaga } from "views/xif-docs/store/saga";
import { notifySaga } from "views/notifications/store/saga";
import { gooenSaga } from "views/gooen/store/saga";
import { PostalServicesSaga } from "views/postal-services/store/saga";
import { CargoSaga } from "views/cargo/store/saga";
import { searchDeclSaga } from "views/declaration-info/store/saga";
import { declarationSaga } from "views/declaration/store/saga";
import { feedbackSaga } from "views/feedback/store/saga";
import { PostDeclarationSaga } from "views/post-declaration/store/saga";
import { UserPermissionsSaga } from "views/user-permissions/store/saga";

export default function* rootSaga() {
  yield all([
    cardsSaga(),
    myInfoSaga(),
    loginSaga(),
    permissionsSaga(),
    xifDocsSaga(),
    notifySaga(),
    gooenSaga(),
    PostalServicesSaga(),
    CargoSaga(),
    searchDeclSaga(),
    declarationSaga(),
    feedbackSaga(),
    PostDeclarationSaga(),
    UserPermissionsSaga(),
  ]);
}
