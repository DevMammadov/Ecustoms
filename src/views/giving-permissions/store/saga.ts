import PermissionsApi from "api/giving-permission";
import { bindAsyncActions } from "helpers";
import { toast } from "react-toastify";
import { takeEvery, put } from "redux-saga/effects";
import { PermissionsActions } from "./action";
import { translator } from "translation";

const lang: any = translator();

export function* permissionsSaga() {
  yield takeEvery(
    PermissionsActions.getWorkers,
    bindAsyncActions(PermissionsActions.getWorkersAsync)(PermissionsApi.getWorkers)
  );

  // Get user Sertificate and full name by pin (Search)
  yield takeEvery(
    PermissionsActions.getWorkerSert,
    bindAsyncActions(PermissionsActions.getWorkerSertAsync)(PermissionsApi.getWorkerSert)
  );

  // Getting single workers permissions
  yield takeEvery(
    PermissionsActions.getWorkerPermission,
    bindAsyncActions(PermissionsActions.getWorkerPermissionAsync)(PermissionsApi.getPermissions)
  );

  // Update single workers permissions
  yield takeEvery(
    PermissionsActions.updateWorkerPermission,
    bindAsyncActions(PermissionsActions.updateWorkerPermissionAsync)(PermissionsApi.updatePermissions)
  );
  yield takeEvery(PermissionsActions.updateWorkerPermissionAsync.success, permissionSuccessFlow);

  //Update worker activity
  yield takeEvery(
    PermissionsActions.updateWorkerActivity,
    bindAsyncActions(PermissionsActions.updateWorkerActivityAsync)(PermissionsApi.updateWorkerActivity)
  );
  yield takeEvery(PermissionsActions.updateWorkerActivityAsync.success, getWorkersFlow);
  yield takeEvery(PermissionsActions.updateWorkerActivityAsync.success, updateActivitySuccessFlow);

  // remove worker permissions
  yield takeEvery(
    PermissionsActions.removeWorkerPermissions,
    bindAsyncActions(PermissionsActions.removeWorkerPermissionsAsync)(PermissionsApi.removeWorkerPermissions)
  );
  yield takeEvery(PermissionsActions.removeWorkerPermissionsAsync.success, getWorkersFlow);

  yield takeEvery(PermissionsActions.updateWorkerPermissionAsync.failed, failFlow);
  yield takeEvery(PermissionsActions.getWorkerSertAsync.failed, failFlow);
  yield takeEvery(PermissionsActions.updateWorkerActivityAsync.failed, failFlow);
  yield takeEvery(PermissionsActions.getWorkerPermissionAsync.failed, failFlow);
}

const failFlow = ({ payload }: any) => {
  //toast["info"](payload.exception?.data);
  console.log(payload);
};

const permissionSuccessFlow = () => {
  toast.success(lang.permissionsUpdated);
};

const updateActivitySuccessFlow = () => {
  toast.success(lang.statusUpdated);
};

function* getWorkersFlow(data: any) {
  yield put(PermissionsActions.getWorkers());
}
