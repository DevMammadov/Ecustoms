import { createActionFactory } from "helpers";

const factory = createActionFactory("USER");

export const getUser = factory.create("GET_USER");
export const getUserAsync = factory.createAsync("GET_USER_ASYNC");

export const getUserPhoto = factory.create("GET_USER_PHOTO");
export const getUserPhotoAsync = factory.createAsync("GET_USER_PHOTO_ASYNC");

export const getCertificaes = factory.create("GET_SERTIFICATES");
export const getCertificatesAsync = factory.createAsync("GET_SERTIFICATES_ASYNC");

export const sendToken = factory.create("SEND_TOKEN");
export const sendTokenAsync = factory.createAsync("SEND_TOKEN_ASYNC");

export const loginWithPassword = factory.create("LOGIN_WITH_PASSWORD");
export const loginWithPasswordAsync = factory.createAsync("LOGIN_WITH_PASSWORD_ASYNC");

export const checkToken = factory.create("CHECK_TOKEN");
export const checkTokenAsync = factory.createAsync("CHECK_TOKEN_ASYNC");

export const userActions = {
  getUser,
  getUserAsync,
  getUserPhoto,
  getUserPhotoAsync,
  getCertificaes,
  getCertificatesAsync,
  sendToken,
  sendTokenAsync,
  checkToken,
  checkTokenAsync,
  loginWithPassword,
  loginWithPasswordAsync,
};
