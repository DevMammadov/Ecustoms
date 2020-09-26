import { createActionFactory } from "helpers";

const factory = createActionFactory("POSTAL_SERVICES");

export const sendGood = factory.create("SEND_GOODD");
export const sendGoodAsync = factory.createAsync("SEND_GOODD_ASYNC");

export const saveGood = factory.create("SAVE_GOOD");
export const setIndex = factory.create("SET_INDEX");
export const setFail = factory.create("SET_FAIL");
export const setWarning = factory.create("SET_WARNING");
export const setSuccess = factory.create("SET_SUCCESS_COUNT");
export const clearStatus = factory.create("CLEAR_STATUS");

export const getSubData = factory.create("GET_SUB_DATA");
export const getSubDataAsync = factory.createAsync("GET_SUB_DATA_ASYNC");

export const removePostal = factory.create("REMOVE_POSTAL");
export const removePostalAsync = factory.createAsync("REMOVE_POSTAL_ASYNC");

export const toggleFilter = factory.create("TOGGLE_FILTER");

export const removeSubData = factory.create("REMOVE_SUB_DATA");

export const getPostal = factory.create("GET_POSTAL");
export const getPostalAsync = factory.createAsync("GET_POSTAL_ASYNC");

export const getCountries = factory.create("GET_COUNTRIES");
export const getCountriesAsync = factory.createAsync("GET_COUNTRIES_ASYNC");

export const PostalServicesActions = {
  sendGood,
  sendGoodAsync,
  saveGood,
  setIndex,
  setFail,
  setWarning,
  setSuccess,
  clearStatus,
  getSubData,
  getSubDataAsync,
  removePostal,
  removePostalAsync,
  removeSubData,
  toggleFilter,
  getPostal,
  getPostalAsync,
  getCountries,
  getCountriesAsync,
};
