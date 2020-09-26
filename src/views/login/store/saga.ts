import userApi from "api/user.api";
import { bindAsyncActions, defaultRequest } from "helpers";
import { toast } from "react-toastify";
import { takeEvery, put } from "redux-saga/effects";
import { userActions } from "./action";
import { setToStorage, emptyStorage } from "helpers/storage";
import { push } from "connected-react-router";
import { decode } from "jsonwebtoken";

export function* loginSaga() {
  yield takeEvery(userActions.getUser, bindAsyncActions(userActions.getUserAsync)(userApi.getUser));

  yield takeEvery(userActions.getUserPhoto, bindAsyncActions(userActions.getUserPhotoAsync)(userApi.getPhoto));

  yield takeEvery(
    userActions.getCertificaes,
    bindAsyncActions(userActions.getCertificatesAsync)(userApi.getCertificates)
  );

  yield takeEvery(userActions.sendToken, bindAsyncActions(userActions.sendTokenAsync)(userApi.sendToken));

  yield takeEvery(userActions.checkToken, bindAsyncActions(userActions.checkTokenAsync)(userApi.checkToken));
  yield takeEvery(userActions.checkTokenAsync.failed, checkTokenFailedFlow);

  yield takeEvery(userActions.getUserAsync.success, getUserSuccess);
  yield takeEvery(userActions.getUserAsync.failed, getUserFailFlow);
  yield takeEvery(userActions.sendTokenAsync.success, saveLocalToken);
  yield takeEvery(userActions.getCertificatesAsync.success, saveSertificates);
  yield takeEvery(userActions.sendTokenAsync.failed, sendTokenfailFlow);
  yield takeEvery(userActions.getCertificatesAsync.failed, getCertificatesFailFlow);
}

function* getUserSuccess({ payload }: any) {
  const asanToken = payload.data.data.token;
  setToStorage("asa", asanToken);
  let asanTokenDecoded: any = decode(asanToken);
  if (asanTokenDecoded.main.loginType === "loginWithPassword") {
    yield put(userActions.sendToken({ token: asanToken, voen: "" }));
    yield put(push("/"));
  } else {
    yield put(userActions.getCertificaes(asanToken));
    yield put(push("/login"));
  }
}

const getUserFailFlow = () => {
  window.location.href = `${process.env.REACT_APP_ASAN_BASE_URL}/auth?origin=${process.env.REACT_APP_ORIGIN_URL}`;
};

const saveSertificates = ({ payload }: any) => {
  setToStorage("serts", payload.data.data.availableCertificates);
};

function* saveLocalToken({ payload }: any) {
  setToStorage("lcl", payload.data.data.token);
  setToStorage("rt", payload.data.data.refreshToken);
  const origin = localStorage.getItem("login-origin") || "/";
  yield put(push(origin));
  //https://te.customs.gov.az/asan
}

const checkTokenFailedFlow = ({ payload }: any) => {
  if (payload?.request?.status !== 401) {
    toast.error("Internet əlaqəniz kəsilmişdir");
  } else {
    emptyStorage();
  }
};

function* sendTokenfailFlow() {
  toast.error("Qeydiyyat zamanı xəta baş verdi");
  yield put(push("/"));
}

const getCertificatesFailFlow = () => {
  toast.error("Asan Sertifikatların alınması zamanı xəta baş verdi");
};
