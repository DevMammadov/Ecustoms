import { bindAsyncActions } from "helpers";
import { takeEvery, put, select } from "redux-saga/effects";
import { CargoActions } from "./action";
import cargoApi from "api/cargo.api";
import commonApi from "api/common.api";
import { IAppState } from "store/reducers";

export function* CargoSaga() {
  yield takeEvery(CargoActions.getCargo, bindAsyncActions(CargoActions.getCargoAsync)(cargoApi.getCargo));
  yield takeEvery(CargoActions.getSubData, bindAsyncActions(CargoActions.getSubDataAsync)(cargoApi.getSubData));

  yield takeEvery(CargoActions.checkVoen, bindAsyncActions(CargoActions.checkVoenAsync)(cargoApi.checkVoen));

  yield takeEvery(CargoActions.getCountries, bindAsyncActions(CargoActions.getCountriesAsync)(commonApi.getCountries));

  yield takeEvery(CargoActions.sendFile, bindAsyncActions(CargoActions.sendFileAsync)(cargoApi.sendFile));

  yield takeEvery(CargoActions.checkVoenAsync.success, onSuccessFlow);
  yield takeEvery(CargoActions.checkVoenAsync.failed, onFailFlow);
}

function* onSuccessFlow() {
  const state: IAppState = yield select();
  let goods = state.cargo.xmlGoods;
  let index = state.cargo.uploadIndex;
  yield put(CargoActions.setSuccess(state.cargo.successCount + 1));
  if (index < goods.length - 1) {
    yield put(CargoActions.setIndex(index + 1));
    yield put(CargoActions.checkVoen(goods[index + 1].IDXAL_VOEN));
  } else {
    //yield put(PostActions.setIndex(0));
  }
}

function* onFailFlow({ payload }: any) {
  const state: IAppState = yield select();
  let goods = state.cargo.xmlGoods;
  let index = state.cargo.uploadIndex;

  if (payload?.response?.data?.exception?.status === "error") {
    yield put(
      CargoActions.setFail({
        index: goods[index].GOODS_CODE,
        message: payload?.response?.data?.exception?.errorMessage,
      })
    );
    if (index < goods.length - 1) {
      yield put(CargoActions.setIndex(index + 1));
      yield put(CargoActions.checkVoen(goods[index + 1].IDXAL_VOEN));
    } else {
      //yield put(PostActions.setIndex(0));
    }
  } else {
    console.log("different error");
  }
}
