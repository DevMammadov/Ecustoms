import XifDocsApi from "api/xif-docs";
import { bindAsyncActions } from "helpers";
import { takeEvery, put } from "redux-saga/effects";
import { XifDocsActions } from "./action";
import { toast } from "react-toastify";

export function* xifDocsSaga() {
  yield takeEvery(XifDocsActions.getXifDocs, bindAsyncActions(XifDocsActions.getXifDocsAsync)(XifDocsApi.getXifDocs));

  yield takeEvery(
    XifDocsActions.getXifDocTypes,
    bindAsyncActions(XifDocsActions.getXifDocTypesAsync)(XifDocsApi.getXifDocTypes)
  );

  yield takeEvery(XifDocsActions.getDoc, bindAsyncActions(XifDocsActions.getDocAsync)(XifDocsApi.getDoc));

  yield takeEvery(
    XifDocsActions.sendFilterForm,
    bindAsyncActions(XifDocsActions.sendFilterFormAsync)(XifDocsApi.sendFilterForm)
  );

  yield takeEvery(
    XifDocsActions.sendXifDocs,
    bindAsyncActions(XifDocsActions.sendXifDocsAsync)(XifDocsApi.sendXifDocs)
  );

  yield takeEvery(
    XifDocsActions.getCompanyInfo,
    bindAsyncActions(XifDocsActions.getCompanyInfoAsync)(XifDocsApi.getCompanyInfo)
  );

  yield takeEvery(
    XifDocsActions.getCurrency,
    bindAsyncActions(XifDocsActions.getCurrencyAsync)(XifDocsApi.getCurrency)
  );

  yield takeEvery(XifDocsActions.removeDoc, bindAsyncActions(XifDocsActions.removeDocAsync)(XifDocsApi.removeDoc));
  yield takeEvery(XifDocsActions.getFile, bindAsyncActions(XifDocsActions.getFileAsync)(XifDocsApi.getFile));
  yield takeEvery(XifDocsActions.updateDoc, bindAsyncActions(XifDocsActions.updateDocAsync)(XifDocsApi.updateDoc));

  // success flows
  yield takeEvery(XifDocsActions.getFileAsync.success, fileSuccessFlow);
  yield takeEvery(XifDocsActions.removeDocAsync.success, getDocsFlow);

  // fail flows
  yield takeEvery(
    [
      XifDocsActions.getXifDocsAsync.failed,
      XifDocsActions.getDocAsync.failed,
      XifDocsActions.sendFilterFormAsync.failed,
      XifDocsActions.sendXifDocsAsync.failed,
      XifDocsActions.getCompanyInfoAsync.failed,
      XifDocsActions.getCurrencyAsync.failed,
      XifDocsActions.removeDocAsync.failed,
      XifDocsActions.getFileAsync.failed,
      XifDocsActions.getFileAsync.failed,
      XifDocsActions.getCurrencyAsync.failed,
      XifDocsActions.updateDocAsync.failed,
    ],
    failFlow
  );
}

const fileSuccessFlow = (response: any) => {
  const file = new Blob([response.payload], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
};

const failFlow = ({ payload }: any) => {
  // console.log(payload.response.data.exception);
  const status: keyof typeof toast = payload.response?.data?.exception?.status.toLowerCase() || "error";
  const message = payload?.response?.data?.exception?.errorMessage;
  //@ts-ignore
  //toast[status](message);
};

function* getDocsFlow() {
  yield put(XifDocsActions.getXifDocs());
}
