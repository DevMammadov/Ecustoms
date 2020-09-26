import FeedbackApi from "api/feedback.api";
import { bindAsyncActions } from "helpers";
import { takeEvery, put } from "redux-saga/effects";
import { FeedbackActions } from "./action";
import { toast } from "react-toastify";

export function* feedbackSaga() {
  yield takeEvery(
    FeedbackActions.getCategories,
    bindAsyncActions(FeedbackActions.getCategoriesAsync)(FeedbackApi.getCategories)
  );
  yield takeEvery(FeedbackActions.getCategoriesAsync.success, handleStepOneFlow);
  yield takeEvery(FeedbackActions.getCategoriesAsync.failed, failFlow);

  yield takeEvery(
    FeedbackActions.submitFeedback,
    bindAsyncActions(FeedbackActions.submitFeedbackAsync)(FeedbackApi.submitFeedback)
  );
  yield takeEvery(FeedbackActions.submitFeedbackAsync.success, handleGooenUpdateSuccessFlow);
  yield takeEvery(FeedbackActions.submitFeedbackAsync.failed, failFlow);
}

function* handleStepOneFlow(action: any) {
  if (typeof action.payload.id !== "object") yield put(FeedbackActions.setCurrentStep(1));
}

const failFlow = (action: any) => {
  const status: "info" | "warn" | "error" = action?.payload?.response?.data?.exception?.status;
  if (action?.payload?.response?.data?.code === 400) {
    toast[status](action?.payload?.response?.data?.exception?.errorMessage);
  }
};

function* handleGooenUpdateSuccessFlow() {
  toast.success("Təklifiniz uğurla göndərildi.");
  yield put(FeedbackActions.setCurrentStep(0));
}
