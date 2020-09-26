import { getFile } from "./../../xif-docs/store/action";
import cardApi from "api/cards.api";
import { bindAsyncActions } from "helpers";
import { takeEvery, put } from "redux-saga/effects";
import { declarationSearchActions } from "./actions";
import DeclaratioInfoApi from "api/declarationInfo.api";
import { links } from "routes";
import { push } from "connected-react-router";

export function* searchDeclSaga() {
  yield takeEvery(
    declarationSearchActions.searchDeclData,
    bindAsyncActions(declarationSearchActions.searchDeclDataAsync)(DeclaratioInfoApi.egb)
  );

  yield takeEvery(declarationSearchActions.searchDeclDataAsync.success, getUrl);

  yield takeEvery(
    declarationSearchActions.getDeclDoc,
    bindAsyncActions(declarationSearchActions.getDeclDocAsync)(DeclaratioInfoApi.getEgbFile)
  );

  yield takeEvery(declarationSearchActions.getDeclDocAsync.success, fileSuccessFlow);
}

function* getUrl() {
  yield put(push(links.DeclarationInfo.info));
}

const fileSuccessFlow = (response: any) => {
  const file = new Blob([response.payload?.data?.file], { type: "application/adoc" });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
};
