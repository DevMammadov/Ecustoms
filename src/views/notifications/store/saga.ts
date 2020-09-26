import { notifyActions } from "./action";
import NotifyApi from "api/notify.api";
import { takeEvery } from "redux-saga/effects";
import { bindAsyncActions } from "helpers";

export function* notifySaga() {
  yield takeEvery(
    notifyActions.getLastNotify,
    bindAsyncActions(notifyActions.getLastNotifyAsync)(NotifyApi.getLastNotify)
  );

  yield takeEvery(notifyActions.getNotify, bindAsyncActions(notifyActions.getNotifyAsync)(NotifyApi.getNotify));

  yield takeEvery(
    notifyActions.getFilterFields,
    bindAsyncActions(notifyActions.getFilterFieldsAsync)(NotifyApi.getFilters)
  );
}
