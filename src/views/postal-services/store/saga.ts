import { bindAsyncActions } from "helpers";
import { takeEvery, select, put } from "redux-saga/effects";
import { PostalServicesActions as PostActions } from "./action";
import postalServicesApi from "api/postal-services";
import commonApi from "api/common.api";
import { IAppState } from "store/reducers";

export function* PostalServicesSaga() {
  yield takeEvery(PostActions.sendGood, bindAsyncActions(PostActions.sendGoodAsync)(postalServicesApi.sendGood));

  yield takeEvery(PostActions.getPostal, bindAsyncActions(PostActions.getPostalAsync)(postalServicesApi.getPostal));
  yield takeEvery(PostActions.getSubData, bindAsyncActions(PostActions.getSubDataAsync)(postalServicesApi.getSubData));
  yield takeEvery(
    PostActions.removePostal,
    bindAsyncActions(PostActions.removePostalAsync)(postalServicesApi.removePostal)
  );

  yield takeEvery(PostActions.getCountries, bindAsyncActions(PostActions.getCountriesAsync)(commonApi.getCountries));

  yield takeEvery(PostActions.sendGoodAsync.success, onSuccessFlow);
  yield takeEvery(PostActions.sendGoodAsync.failed, onFailFlow);
  yield takeEvery(PostActions.removePostalAsync.success, onRemoveSuccessFlow);
}

function* onRemoveSuccessFlow({ payload }: any) {
  yield put(PostActions.removeSubData(payload));
  yield put(PostActions.getSubData(payload));
}

function* onSuccessFlow() {
  const state: IAppState = yield select();
  let goods = state.postalServices.xmlGoods;
  let index = state.postalServices.uploadIndex;
  yield put(PostActions.setSuccess(state.postalServices.successCount + 1));
  if (index < goods.length - 1) {
    yield put(PostActions.setIndex(index + 1));
    yield put(PostActions.sendGood(goods[index + 1]));
  } else {
    //yield put(PostActions.setIndex(0));
  }
}

function* onFailFlow({ payload }: any) {
  const state: IAppState = yield select();
  let goods = state.postalServices.xmlGoods;
  let index = state.postalServices.uploadIndex;

  const { status, errorMessage } = payload.response.data.exception;
  if (status === "warn") {
    yield put(PostActions.setWarning({ index: goods[index].TRACKING_NO, message: errorMessage }));
    if (index < goods.length - 1) {
      yield put(PostActions.setIndex(index + 1));
      yield put(PostActions.sendGood(goods[index + 1]));
    } else {
      //yield put(PostActions.setIndex(0));
    }
  } else if (status === "error") {
    yield put(PostActions.setFail({ index: goods[index].TRACKING_NO, message: errorMessage }));
    if (index < goods.length - 1) {
      yield put(PostActions.setIndex(index + 1));
      yield put(PostActions.sendGood(goods[index + 1]));
    } else {
      //yield put(PostActions.setIndex(0));
    }
  } else {
    console.log("different error");
  }
}

// function* sendGood(index: number, goods: IGood[]) {
//   if (index < goods.length - 1) {
//     yield put(PostActions.setIndex(index + 1));
//     yield put(PostActions.sendGood(goods[index + 1]));
//   } else {
//     //yield put(PostActions.setIndex(0));
//   }
// }
