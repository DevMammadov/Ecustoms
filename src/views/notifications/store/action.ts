import { createActionFactory } from "helpers";

const factory = createActionFactory("NOTIFY");

export const getLastNotify = factory.create("GET_LAST_NOTIFY");
export const getLastNotifyAsync = factory.createAsync("GET_LAST_NOTIFY_ASYNC");

export const getFilterFields = factory.create("GET_FILTER_FIELDS");
export const getFilterFieldsAsync = factory.createAsync("GET_FILTER_FIELDS_ASYNC");

export const getNotify = factory.create("GET_NOTIFY");
export const getNotifyAsync = factory.createAsync("GET_NOTIFY_ASYNC");

export const sendNotifyFilterForm = factory.create("SEND_NOTIFY_FILTER_FORM");
export const sendNotifyFilterFormAsync = factory.createAsync("SEND_NOTIFY_FILTER_FORM_ASYNC");

export const togglePage = factory.create("TOGGLE_PAGE");
export const toogleFiltering = factory.create("TOGGLE_FILTERING");

export const notifyActions = {
  getLastNotify,
  getLastNotifyAsync,
  getNotify,
  getNotifyAsync,
  getFilterFields,
  getFilterFieldsAsync,
  sendNotifyFilterForm,
  sendNotifyFilterFormAsync,
  togglePage,
  toogleFiltering,
};
