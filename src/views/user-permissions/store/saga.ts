import { bindAsyncActions } from "helpers";
import { takeEvery, put } from "redux-saga/effects";
import { UserPermissionsActions } from "./action";
import UserPermissionApi from "api/user-permissions.api";

export function* UserPermissionsSaga() {
  yield takeEvery(
    UserPermissionsActions.searchByPin,
    bindAsyncActions(UserPermissionsActions.searchByPinAsync)(UserPermissionApi.searchByPin)
  );

  yield takeEvery(
    UserPermissionsActions.getUserPerms,
    bindAsyncActions(UserPermissionsActions.getUserPermsAsync)(UserPermissionApi.getUserPermissions)
  );

  yield takeEvery(
    UserPermissionsActions.getAllPermissions,
    bindAsyncActions(UserPermissionsActions.getAllPermissionsAsync)(UserPermissionApi.getAllPermissions)
  );
}
