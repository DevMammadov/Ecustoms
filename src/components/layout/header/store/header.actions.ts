import { createActionFactory } from "helpers";

const factory = createActionFactory("HEADER");

export const changeLang = factory.create("CHANGE_LANG");
export const setTheme = factory.create("SET_THEME");

export const headerActions = {
  changeLang,
  setTheme,
};
