import { createActionFactory } from "helpers";

const factory = createActionFactory("CARDS");

export const getCards = factory.create("GET_CARDS");
export const getCardsAsync = factory.createAsync("GET_CARDS_ASYNC");

export const getFavoriteCards = factory.create("GET_FAVORITE_CARDS");
export const getFavoriteCardsAsync = factory.createAsync("GET_FAVORITE_CARDS_ASYNC");

export const setFavoriteCard = factory.create("SET_FAVORITE_CARD");
export const setFavoriteCardAsync = factory.createAsync("SET_FAVORITE_CARD_ASYNC");

export const CardActions = {
  getCards,
  getCardsAsync,
  setFavoriteCard,
  setFavoriteCardAsync,
  getFavoriteCards,
  getFavoriteCardsAsync,
};
