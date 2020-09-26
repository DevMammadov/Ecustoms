import GooenApi from 'api/gooen.api';
import { bindAsyncActions } from 'helpers';
import { takeEvery, put } from 'redux-saga/effects';
import { GooenActions } from './action';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

export function* gooenSaga() {
  yield takeEvery(GooenActions.getCountries, bindAsyncActions(GooenActions.getCountriesAsync)(GooenApi.getCountries));
  yield takeEvery(GooenActions.getCountriesAsync.failed, failFlow);

  yield takeEvery(
    GooenActions.handleStepOne,
    bindAsyncActions(GooenActions.handleStepOneAsync)(GooenApi.handleStepOne)
  );
  yield takeEvery(GooenActions.handleStepOneAsync.success, handleStepOneFlow);
  yield takeEvery(GooenActions.handleStepOneAsync.failed, failFlow);

  yield takeEvery(
    GooenActions.handleStepTwo,
    bindAsyncActions(GooenActions.handleStepTwoAsync)(GooenApi.handleStepTwo)
  );
  yield takeEvery(GooenActions.handleStepTwoAsync.success, handleStepTwoFlow);
  yield takeEvery(GooenActions.handleStepTwoAsync.failed, failFlow);

  yield takeEvery(GooenActions.updateGooen, bindAsyncActions(GooenActions.updateGooenAsync)(GooenApi.updateGooen));
  yield takeEvery(GooenActions.updateGooenAsync.success, handleGooenUpdateSuccessFlow);
  yield takeEvery(GooenActions.updateGooenAsync.failed, failFlow);

  yield takeEvery(GooenActions.getGooenInfo, bindAsyncActions(GooenActions.getGooenInfoAsync)(GooenApi.getGooenInfo));
}

function* handleStepOneFlow() {
  yield put(GooenActions.setCurrentStep(1));
}

function* handleGooenUpdateSuccessFlow({ payload }: any) {
  toast.success('GÖÖEN-iviz bərpa edildi');
  yield put(GooenActions.getGooenInfo({ pin: payload.pin }));
}

function* handleStepTwoFlow() {
  yield put(GooenActions.setCurrentStep(2));
}

const failFlow = (action: any) => {
  const status: 'info' | 'warn' | 'error' = action?.payload?.response?.data?.exception?.status;
  if (action?.payload?.response?.data?.code === 400) {
    toast[status](action?.payload?.response?.data?.exception?.errorMessage);
  }
};
