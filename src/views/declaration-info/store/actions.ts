import { createActionFactory } from "helpers";

const factory = createActionFactory("DECLARATION_INFO");

export const searchDeclData = factory.create("SEARCH_DECL_DATA");
export const searchDeclDataAsync = factory.createAsync("SEARCH_DECL_DATA_ASYNC");

export const getDeclDoc = factory.create("GET_DECL_DOC");
export const getDeclDocAsync = factory.createAsync("GET_DECL_DOC_ASYNC");

export const declarationSearchActions = {
  searchDeclData,
  searchDeclDataAsync,
  getDeclDoc,
  getDeclDocAsync,
};
