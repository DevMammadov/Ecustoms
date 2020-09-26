import { handleActions } from "redux-actions";
import { getCardsAsync, getFavoriteCardsAsync } from "./action";
import { ICard } from "../types";

export interface ICardState {
  cards: ICard[];
  favorites: number[];
  loading: boolean;
}

const initialState: ICardState = {
  cards: [],
  favorites: [],
  loading: false,
};

export default handleActions(
  {
    [getCardsAsync.started]: (state) => ({ ...state, loading: true }),
    [getCardsAsync.failed]: (state) => ({ ...state, loading: false, cards: [], favorites: [] }),
    [getCardsAsync.success]: (state, action) => ({
      ...state,
      loading: false,
      cards: action.payload.cards as any,
      favorites: action.payload.favorites as any,
    }),
    [getFavoriteCardsAsync.started]: (state) => ({ ...state, loading: true }),
    [getFavoriteCardsAsync.failed]: (state) => ({ ...state, loading: false, cards: [], favorites: [] }),
    [getFavoriteCardsAsync.success]: (state, action) => ({
      ...state,
      loading: false,
      cards: action.payload as any,
      favorites: [],
    }),
  },
  initialState
);
