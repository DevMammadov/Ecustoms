import { createActionFactory } from "helpers";

const factory = createActionFactory("CARDS");

export const getCards = factory.create("GET_CARDS");
export const getCardsAsync = factory.createAsync("GET_CARDS_ASYNC");

export const cardActions = {
  getCards,
  getCardsAsync
};
