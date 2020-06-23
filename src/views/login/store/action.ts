import { createActionFactory } from "helpers";

const factory = createActionFactory("USER");

export const getUser = factory.create("GET_USER");
export const getUserAsync = factory.createAsync("GET_USER_ASYNC");

export const getCertificaes = factory.create("GET_SERTIFICATES");
export const getCertificatesAsync = factory.createAsync("GET_SERTIFICATES_ASYNC");

export const sendToken = factory.create("SEND_TOKEN");
export const sendTokenAsync = factory.createAsync("SEND_TOKEN_ASYNC");

export const checkToken = factory.create("CHECK_TOKEN");
export const checkTokenAsync = factory.createAsync("CHECK_TOKEN_ASYNC");

export const setSertificate = factory.create("SET_SERTIFICATE");

export const userActions = {
  getUser,
  getUserAsync,
  getCertificaes,
  getCertificatesAsync,
  sendToken,
  sendTokenAsync,
  checkToken,
  checkTokenAsync,
  setSertificate,
};
