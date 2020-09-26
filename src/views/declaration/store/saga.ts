import { bindAsyncActions } from "helpers";
import { takeEvery } from "redux-saga/effects";
import { DeclarationActions } from "./action";
import DeclarationApi from "api/declaration.api";

export function* declarationSaga() {
  yield takeEvery(
    DeclarationActions.getDics,
    bindAsyncActions(DeclarationActions.getDicsAsync)(DeclarationApi.getDecs)
  );

  yield takeEvery(
    DeclarationActions.checkPersonalInfo,
    bindAsyncActions(DeclarationActions.checkPersonalInfoAsync)(DeclarationApi.checkPersonalInfo)
  );
}
