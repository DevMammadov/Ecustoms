import cardApi from "api/cards.api";
import { bindAsyncActions } from "helpers";
import { takeEvery } from "redux-saga/effects";
import { cardActions } from "./action";

export function* cardsSaga() {
  yield takeEvery(
    cardActions.getCards,
    bindAsyncActions(cardActions.getCardsAsync)(cardApi.getCards)
  );
}
