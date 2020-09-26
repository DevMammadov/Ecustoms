import { createActionFactory } from "helpers";

const factory = createActionFactory("POST-DECLARATION");

export const getDics = factory.create("GET_DICS");
export const getDicsAsync = factory.createAsync("GET_DICS_ASYNC");

export const getGoodsGroup = factory.create("GET_GOODS_GROUP");
export const getGoodsGroupAsync = factory.createAsync("GET_GOODS_GROUP_ASYNC");

export const toggleFilter = factory.create("");
export const setStep = factory.create("SET_STEP");
export const addToTotal = factory.create("ADD_TO_TOTAL");
export const setUpdateIndex = factory.create("SET_UPDATE_INDEX");
export const emptyTotalObject = factory.create("EMPTY_TOTAL_OBJECT");

export const calculateGood = factory.create("CALCULATE_GOOD");
export const calculateGoodAsync = factory.createAsync("CALCULATE_GOOD_ASYNC");

export const getCompanies = factory.create("GET_COMPANIES");
export const getCompaniesAsync = factory.createAsync("GET_COMPANIES_ASYNC");

// will removed
export const searchDeclarations = factory.create("SEARCH_DECLARATIONS");
export const searchDeclarationsAsync = factory.createAsync("SEARCH_DECLARATIONS_ASYNC");

export const getTotalPrices = factory.create("GET_TOTAL_PRICES");
export const getTotalPricesAsync = factory.createAsync("GET_TOTAL_PRICES_ASYNC");

export const addDeclaration = factory.create("ADD_DECLARATION");
export const addDeclarationAsync = factory.createAsync("ADD_DECLARATION_ASYNC");

export const getDeclarationInfo = factory.create("GET_DECLARATION_INFO");
export const getDeclarationInfoAsync = factory.createAsync("GET_DECLARATION_INFO_ASYNC");
export const clearDecInfo = factory.create("CLEAR_DEC_INFO");

export const PostDeclarationActions = {
  toggleFilter,
  setStep,
  getDics,
  getDicsAsync,
  getGoodsGroup,
  getGoodsGroupAsync,
  calculateGood,
  calculateGoodAsync,
  addToTotal,
  getCompanies,
  getCompaniesAsync,
  setUpdateIndex,
  getTotalPrices,
  getTotalPricesAsync,
  addDeclaration,
  addDeclarationAsync,
  emptyTotalObject,
  searchDeclarations,
  searchDeclarationsAsync,
  getDeclarationInfo,
  getDeclarationInfoAsync,
  clearDecInfo,
};
