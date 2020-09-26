import { createActionFactory } from "helpers";

const factory = createActionFactory("CARGO");

export const checkVoen = factory.create("SEND_GOOD");
export const checkVoenAsync = factory.createAsync("SEND_GOOD_ASYNC");

export const getCargo = factory.create("GET_CARGO");
export const getCargoAsync = factory.createAsync("GET_CARGO_ASYNC");

export const getCountries = factory.create("GET_COUNTRIES");
export const getCountriesAsync = factory.createAsync("GET_COUNTRIES_ASYNC");

export const getSubData = factory.create("GET_SUB_DATA");
export const getSubDataAsync = factory.createAsync("GET_SUB_DATA_ASYNC");

export const sendFile = factory.create("SEND_FILE");
export const sendFileAsync = factory.createAsync("SEND_FILE_ASYNC");

export const saveGood = factory.create("SAVE_GOOD");
export const setIndex = factory.create("SET_INDEX");
export const setFail = factory.create("SET_FAIL");
export const setSuccess = factory.create("SET_SUCCESS_COUNT");
export const clearStatus = factory.create("CLEAR_STATUS");
export const toggleFilter = factory.create("TOGGLE_FILTER");

export const CargoActions = {
  checkVoen,
  checkVoenAsync,
  getCargo,
  getCargoAsync,
  clearStatus,
  saveGood,
  setIndex,
  setFail,
  setSuccess,
  getSubData,
  getSubDataAsync,
  sendFile,
  sendFileAsync,
  getCountries,
  getCountriesAsync,
  toggleFilter,
};
