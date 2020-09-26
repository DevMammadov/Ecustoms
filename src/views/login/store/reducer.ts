import { handleActions } from "redux-actions";
import {
  getUserPhotoAsync,
  sendTokenAsync,
  checkTokenAsync,
  loginWithPasswordAsync,
  getCertificatesAsync,
} from "./action";

export interface IUserState {
  name: string;
  fin: string;
  photo: string;
  tokenExpired: boolean;
  pageLoading: boolean;
}

const initialState: IUserState = {
  fin: "",
  photo: "",
  name: "",
  tokenExpired: true,
  pageLoading: false,
};

export default handleActions(
  {
    [getUserPhotoAsync.success]: (state, action: any) => ({
      ...state,
      photo: action.payload.data,
    }),
    [sendTokenAsync.started]: (state) => ({ ...state, pageLoading: true }),
    [sendTokenAsync.failed]: (state) => ({ ...state, pageLoading: false }),
    [sendTokenAsync.success]: (state) => ({ ...state, pageLoading: false }),
    [loginWithPasswordAsync.started]: (state) => ({ ...state, pageLoading: true }),
    [loginWithPasswordAsync.failed]: (state) => ({ ...state, pageLoading: false }),
    [loginWithPasswordAsync.success]: (state) => ({ ...state, pageLoading: false }),
    [getCertificatesAsync.started]: (state) => ({ ...state, pageLoading: true }),
    [getCertificatesAsync.failed]: (state) => ({ ...state, pageLoading: false }),
    [getCertificatesAsync.success]: (state) => ({ ...state, pageLoading: false }),
    [checkTokenAsync.started]: (state) => ({ ...state, pageLoading: true }),
    [checkTokenAsync.failed]: (state, action: any) => ({
      ...state,
      tokenExpired: action.payload?.response?.status === 401,
      pageLoading: false,
    }),
    [checkTokenAsync.success]: (state) => ({
      ...state,
      tokenExpired: false,
      pageLoading: false,
    }),
  },
  initialState
);
