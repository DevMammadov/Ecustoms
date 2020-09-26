import { bindAsyncActions } from "helpers";
import { takeEvery, put } from "redux-saga/effects";
import { PostDeclarationActions } from "./action";
import PostDeclarationApi from "api/post-declaration.api";
import { toast } from "react-toastify";

export function* PostDeclarationSaga() {
  yield takeEvery(
    PostDeclarationActions.getDics,
    bindAsyncActions(PostDeclarationActions.getDicsAsync)(PostDeclarationApi.getDecs)
  );

  yield takeEvery(
    PostDeclarationActions.searchDeclarations,
    bindAsyncActions(PostDeclarationActions.searchDeclarationsAsync)(PostDeclarationApi.searchDeclaration)
  );

  yield takeEvery(
    PostDeclarationActions.getDeclarationInfo,
    bindAsyncActions(PostDeclarationActions.getDeclarationInfoAsync)(PostDeclarationApi.getDeclarationInfo)
  );

  yield takeEvery(
    PostDeclarationActions.addDeclaration,
    bindAsyncActions(PostDeclarationActions.addDeclarationAsync)(PostDeclarationApi.addDeclaration)
  );

  yield takeEvery(
    PostDeclarationActions.getTotalPrices,
    bindAsyncActions(PostDeclarationActions.getTotalPricesAsync)(PostDeclarationApi.getTotalPrice)
  );

  yield takeEvery(
    PostDeclarationActions.getCompanies,
    bindAsyncActions(PostDeclarationActions.getCompaniesAsync)(PostDeclarationApi.getCompanies)
  );

  yield takeEvery(
    PostDeclarationActions.calculateGood,
    bindAsyncActions(PostDeclarationActions.calculateGoodAsync)(PostDeclarationApi.calculateGood)
  );

  yield takeEvery(
    PostDeclarationActions.getGoodsGroup,
    bindAsyncActions(PostDeclarationActions.getGoodsGroupAsync)(PostDeclarationApi.getGoodsGroup)
  );
}
