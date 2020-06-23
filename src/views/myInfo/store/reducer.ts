import { handleActions } from "redux-actions";
import { IBankInfo, IInfo, ICustomsWarehousesInfo, IUserContacts } from "../types";
import {
  getBankInfoAsync,
  getInfoAsync,
  sendUserEmailAsync,
  sendUserEmailCodeAsync,
  getWarehousesAsync,
  updateInfoAsync,
  getUserContactsAsync,
  sendUserNumberAsync,
  sendNumberCodeAsync,
  saveUserNumber,
  saveUserEmail,
  updateBankInfoAsync,
} from "./action";

export interface IMyInfoState {
  info: IInfo;
  bankInfo: IBankInfo[];
  wareHouses: ICustomsWarehousesInfo[];
  contacts: IUserContacts;
  loading: boolean;
}

const initialState: IMyInfoState = {
  info: {} as IInfo,
  bankInfo: [],
  wareHouses: [],
  contacts: {} as any,
  loading: false,
};

export default handleActions(
  {
    [getInfoAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [getInfoAsync.failed]: (state: IMyInfoState) => ({
      ...state,
      loading: false,
      info: {} as IInfo,
    }),
    [getInfoAsync.success]: (state: IMyInfoState, action: any) => ({
      ...state,
      loading: false,
      info: action.payload.data,
    }),
    [updateInfoAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [updateInfoAsync.failed]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [updateInfoAsync.success]: (state: IMyInfoState, action: any) => ({
      ...state,
      loading: false,
      info: action.payload.data,
    }),
    [getBankInfoAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [getBankInfoAsync.failed]: (state: IMyInfoState) => ({ ...state, bankInfo: [], loading: false }),
    [getBankInfoAsync.success]: (state: IMyInfoState, action: any) => ({
      ...state,
      loading: false,
      bankInfo: action.payload.data || [],
    }),
    [updateBankInfoAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [updateBankInfoAsync.failed]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [updateBankInfoAsync.success]: (state: IMyInfoState, action: any) => ({ ...state, loading: false }),
    [getWarehousesAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [getWarehousesAsync.failed]: (state: IMyInfoState) => ({ ...state, wareHouses: [], loading: false }),
    [getWarehousesAsync.success]: (state: IMyInfoState, action: any) => ({
      ...state,
      loading: false,
      wareHouses: action.payload.data || [],
    }),
    [getUserContactsAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [getUserContactsAsync.failed]: (state: IMyInfoState) => ({
      ...state,
      contacts: { ...state.contacts, emails: [], phoneNumbers: [] },
      loading: false,
    }),
    [getUserContactsAsync.success]: (state: IMyInfoState, action: any) => ({
      ...state,
      contacts: {
        ...state.contacts,
        emails: action.payload.data.emails,
        phoneNumbers: action.payload.data.phoneNumbers,
      },
      loading: false,
    }),
    [sendUserNumberAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [sendUserNumberAsync.failed]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [sendUserNumberAsync.success]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [sendNumberCodeAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [sendNumberCodeAsync.failed]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [sendNumberCodeAsync.success]: (state: IMyInfoState) => ({
      ...state,
      contacts: { ...state.contacts, numberConfirmed: true, phoneNumber: null },
      loading: false,
    }),
    [sendUserEmailAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [sendUserEmailAsync.failed]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [sendUserEmailAsync.success]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [sendUserEmailCodeAsync.started]: (state: IMyInfoState) => ({ ...state, loading: true }),
    [sendUserEmailCodeAsync.failed]: (state: IMyInfoState) => ({ ...state, loading: false }),
    [sendUserEmailCodeAsync.success]: (state: IMyInfoState) => ({
      ...state,
      contacts: { ...state.contacts, emailconfirmed: true, emailAddress: null },
      loading: false,
    }),
    [saveUserNumber]: (state: IMyInfoState, action: any) => ({
      ...state,
      contacts: { ...state.contacts, phoneNumber: action.payload },
    }),
    [saveUserEmail]: (state: IMyInfoState, action: any) => ({
      ...state,
      contacts: { ...state.contacts, emailAddress: action.payload },
    }),
  },
  initialState
);
