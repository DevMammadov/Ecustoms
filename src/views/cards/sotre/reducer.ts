import { handleActions } from "redux-actions";
import { getCardsAsync } from "./action";
import { ICard } from "../types";

export interface ICardStore {
  cards: ICard[];
  loading: boolean;
}

const initialState: ICardStore = {
  cards: [],
  loading: false
};

export default handleActions(
  {
    [getCardsAsync.started]: state => ({ ...state, loading: true }),
    [getCardsAsync.failed]: state => ({ ...state, loading: false, cards: [] }),
    [getCardsAsync.success]: (state, action) => ({
      ...state,
      loading: false,
      cards: action.payload as any
    })
  },
  initialState
);
