import cardApi from "api/cards.api";
import { bindAsyncActions } from "helpers";
import { put, takeEvery } from "redux-saga/effects";
import { CardActions } from "./action";

export function* cardsSaga() {
  yield takeEvery(CardActions.getCards, bindAsyncActions(CardActions.getCardsAsync)(cardApi.getCards));

  yield takeEvery(
    CardActions.getFavoriteCards,
    bindAsyncActions(CardActions.getFavoriteCardsAsync)(cardApi.getFavoriteCards)
  );

  yield takeEvery(
    CardActions.setFavoriteCard,
    bindAsyncActions(CardActions.setFavoriteCardAsync)(cardApi.setFavoriteCard)
  );
  yield takeEvery(CardActions.setFavoriteCardAsync.success, handleFavoriteCardSuccess);
}

function* handleFavoriteCardSuccess({ payload }: any) {
  payload.parentCardType === "favoriteCards"
    ? yield put(CardActions.getFavoriteCards())
    : yield put(CardActions.getCards(payload.parentCardType));
}
