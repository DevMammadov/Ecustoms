import userApi from "api/user.api";
import { bindAsyncActions, defaultRequest } from "helpers";
import { toast } from "react-toastify";
import { takeEvery } from "redux-saga/effects";
import { userActions } from "./action";

export function* loginSaga() {
  yield takeEvery(userActions.getUser, bindAsyncActions(userActions.getUserAsync)(userApi.getUser));

  yield takeEvery(
    userActions.getCertificaes,
    bindAsyncActions(userActions.getCertificatesAsync)(userApi.getCertificates)
  );

  yield takeEvery(userActions.sendToken, bindAsyncActions(userActions.sendTokenAsync)(userApi.sendToken));

  yield takeEvery(userActions.checkToken, bindAsyncActions(userActions.checkTokenAsync)(userApi.checkToken));
  yield takeEvery(userActions.checkTokenAsync.failed, checkTokenFailedFlow);

  yield takeEvery(userActions.sendTokenAsync.success, setSertificateAndHeaderToken);
  yield takeEvery(userActions.sendTokenAsync.failed, sendTokenfailFlow);
  yield takeEvery(userActions.getUserAsync.failed, getUserFailFlow);
  yield takeEvery(userActions.getCertificatesAsync.failed, getCertificatesFailFlow);
}

const setSertificateAndHeaderToken = ({ payload }: any) => {
  console.log("setted");
  let token = payload.data.token;
  defaultRequest.defaults.headers["localToken"] = token;
};

const checkTokenFailedFlow = ({ payload }: any) => {
  if (payload?.request?.status !== 401) {
    toast.error("Internet əlaqəniz kəsilmişdir");
  }
};

const sendTokenfailFlow = () => {
  toast.error("Qeydiyyat zamanı xəta baş verdi");
};

const getCertificatesFailFlow = () => {
  toast.error("Asan Sertifikatların alınması zamanı xəta baş verdi");
};

const getUserFailFlow = () => {
  //localorigin: http://localhost:3030/asan/
  //https origin: https://te.customs.gov.az
  window.location.href = "https://asanlogintest.my.gov.az/auth?origin=https://te.customs.gov.az/asan";
};
