import XifDocsApi from "api/xif-docs.api";
import { bindAsyncActions } from "helpers";
import { takeEvery, put } from "redux-saga/effects";
import { XifDocsActions } from "./action";
import { links } from "routes";
import { push } from "connected-react-router";

export function* xifDocsSaga() {
  yield takeEvery(XifDocsActions.getXifDocs, bindAsyncActions(XifDocsActions.getXifDocsAsync)(XifDocsApi.getXifDocs));

  yield takeEvery(
    XifDocsActions.getXifDocTypes,
    bindAsyncActions(XifDocsActions.getXifDocTypesAsync)(XifDocsApi.getXifDocTypes)
  );

  yield takeEvery(XifDocsActions.getDoc, bindAsyncActions(XifDocsActions.getDocAsync)(XifDocsApi.getDoc));

  yield takeEvery(
    XifDocsActions.searchXifDoc,
    bindAsyncActions(XifDocsActions.searchXifDocAsync)(XifDocsApi.searchXifDoc)
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
  yield takeEvery(XifDocsActions.sendXifDocsAsync.success, sendDocFlow);
  yield takeEvery(XifDocsActions.updateDocAsync.success, sendDocFlow);

  // fail flows
  yield takeEvery(
    [
      XifDocsActions.getXifDocsAsync.failed,
      XifDocsActions.getDocAsync.failed,
      XifDocsActions.searchXifDocAsync.failed,
      XifDocsActions.sendXifDocsAsync.failed,
      XifDocsActions.getCompanyInfoAsync.failed,
      XifDocsActions.getCurrencyAsync.failed,
      XifDocsActions.removeDocAsync.failed,
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
  // const status: keyof typeof toast = payload.response?.data?.exception?.status.toLowerCase() || "error";
  //const message = payload?.response?.data?.exception?.errorMessage;
  //@ts-ignore
  //toast[status](message);
};

function* sendDocFlow() {
  yield put(push(links.XifDoc.baseUrl));
}

function* getDocsFlow() {
  yield put(XifDocsActions.getXifDocs());
}
