import { createActionFactory } from "helpers";

const factory = createActionFactory("XIF_DOCS");

export const getXifDocs = factory.create("GET_XIF_DOCS");
export const getXifDocsAsync = factory.createAsync("GET_XIF_DOCS_ASYNC");

export const getXifDocTypes = factory.create("GET_XIF_DOC_TYPES");
export const getXifDocTypesAsync = factory.createAsync("GET_XIF_DOC_TYPES_ASYNC");

export const sendFilterForm = factory.create("SEND_FILTER_FORM");
export const sendFilterFormAsync = factory.createAsync("SEND_FILTER_FORM_ASYNC");

export const toogleFiltering = factory.create("TOGGLE_FILTERING");

export const getCompanyInfo = factory.create("GET_COMPANY_INFO");
export const getCompanyInfoAsync = factory.createAsync("GET_COMPANY_INFO_ASYNC");

export const getCurrency = factory.create("GET_CURRENY");
export const getCurrencyAsync = factory.createAsync("GET_CURRENY_ASYNC");

export const sendXifDocs = factory.create("SEND_XIF_DOCKS");
export const sendXifDocsAsync = factory.createAsync("SEND_XIF_DOCKS_ASYNC");

export const getFile = factory.create("GET_FILE");
export const getFileAsync = factory.createAsync("GET_FILE_ASYNC");

export const removeDoc = factory.create("REMOVE_DOC");
export const removeDocAsync = factory.createAsync("REMOVE_DOC_ASYNC");

export const getDoc = factory.create("GET_DOC");
export const getDocAsync = factory.createAsync("GET_DOC_ASYNC");

export const updateDoc = factory.create("UPDATE_DOC");
export const updateDocAsync = factory.createAsync("UPDATE_DOC_ASYNC");

export const clearDoc = factory.create("CLEAR_DOC");

export const XifDocsActions = {
  getXifDocs,
  getXifDocsAsync,
  getXifDocTypes,
  getXifDocTypesAsync,
  sendFilterForm,
  sendFilterFormAsync,
  toogleFiltering,
  getCompanyInfo,
  getCompanyInfoAsync,
  getCurrency,
  getCurrencyAsync,
  sendXifDocs,
  sendXifDocsAsync,
  getFile,
  getFileAsync,
  removeDoc,
  removeDocAsync,
  getDoc,
  getDocAsync,
  clearDoc,
  updateDoc,
  updateDocAsync,
};
