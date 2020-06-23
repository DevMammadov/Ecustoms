import { createActionFactory } from "helpers";

const factory = createActionFactory("MYINFO");

export const getInfo = factory.create("GET_INFO");
export const getInfoAsync = factory.createAsync("GET_INFO_ASYNC");

export const updateInfo = factory.create("UPDATE_INFO");
export const updateInfoAsync = factory.createAsync("UPDATE_INFO_ASYNC");

export const getBankInfo = factory.create("GET_BANK_INFO");
export const getBankInfoAsync = factory.createAsync("GET_BANK_INFO_ASYNC");

export const updateBankInfo = factory.create("UPDATE_BANK_INFO");
export const updateBankInfoAsync = factory.createAsync("UPDATE_BANK_INFO_ASYNC");

export const getWarehouses = factory.create("GET_WAREHOUSES");
export const getWarehousesAsync = factory.createAsync("GET_WAREHOUSES_ASYNC");

export const getUserContacts = factory.create("GET_USER_CONTACTS");
export const getUserContactsAsync = factory.createAsync("GET_USER_CONTACTS_ASYNC");

export const sendUserNumber = factory.create("SEND_USER_NUMBER");
export const sendUserNumberAsync = factory.createAsync("SEND_USER_NUMBER_ASYNC");

export const sendNumberCode = factory.create("SEND_NUMBER_CODE");
export const sendNumberCodeAsync = factory.createAsync("SEND_NUMBER_CODE_ASYNC");

export const sendUserEmail = factory.create("SEND_USER_EMAIL");
export const sendUserEmailAsync = factory.createAsync("SEND_USER_EMAIL_ASYNC");

export const sendUserEmailCode = factory.create("SEND_USER_EMAIL_CODE");
export const sendUserEmailCodeAsync = factory.createAsync("SEND_USER_EMAIL_CODE_ASYNC");

export const removeNumber = factory.create("REMOVE_NUMBER");
export const removeNumberAsync = factory.createAsync("REMOVE_NUMBER_ASYNC");

export const removeEmail = factory.create("REMOVE_EMAIL");
export const removeEmailAsync = factory.createAsync("REMOVE_EMAIL_ASYNC");

export const saveUserNumber = factory.create("SAVE_USER_NUMBER");
export const saveUserEmail = factory.create("SAVE_USER_EMAIL");

export const toggleNumberActivity = factory.create("TOGGLE_NUMBER_ACTIVITY");
export const toggleNumberActivityAsync = factory.createAsync("TOGGLE_NUMBER_ACTIVITY_ASYNC");

export const toggleEmailActivity = factory.create("TOGGLE_EMAIL_ACTIVITY");
export const toggleEmailActivityAsync = factory.createAsync("TOGGLE_EMAIL_ACTIVITY_ASYNC");

export const MyinfoActions = {
  getInfo,
  getInfoAsync,
  updateInfo,
  updateInfoAsync,
  getBankInfo,
  getBankInfoAsync,
  getWarehouses,
  getWarehousesAsync,
  getUserContacts,
  getUserContactsAsync,
  sendUserNumber,
  sendUserNumberAsync,
  sendUserEmail,
  sendUserEmailAsync,
  sendNumberCode,
  sendNumberCodeAsync,
  removeNumber,
  removeNumberAsync,
  saveUserNumber,
  saveUserEmail,
  sendUserEmailCode,
  sendUserEmailCodeAsync,
  removeEmail,
  removeEmailAsync,
  toggleNumberActivity,
  toggleNumberActivityAsync,
  toggleEmailActivity,
  toggleEmailActivityAsync,
  updateBankInfo,
  updateBankInfoAsync,
};
