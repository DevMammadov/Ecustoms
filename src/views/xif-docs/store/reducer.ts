import { handleActions } from "redux-actions";
import { IXifDoc, ICompanyInfo, ICurrency, IDocToUpdate } from "../types";
import {
  getXifDocsAsync,
  getXifDocTypesAsync,
  sendFilterFormAsync,
  toogleFiltering,
  getCompanyInfoAsync,
  getCurrencyAsync,
  getFileAsync,
  getDocAsync,
  clearDoc,
} from "./action";
import { ISelectItems } from "types";

export interface IXifDocsState {
  xifDocs: IXifDoc[];
  docToUpdate: IDocToUpdate;
  xifDocTypes: ISelectItems[];
  companyInfo: ICompanyInfo;
  currency: ICurrency[];
  file: any;
  isFiltered: boolean;
  loading: boolean;
}

const initialState: IXifDocsState = {
  xifDocs: [],
  docToUpdate: {} as any,
  xifDocTypes: [],
  currency: [],
  companyInfo: {} as any,
  file: null,
  isFiltered: false,
  loading: false,
};

export default handleActions(
  {
    [getXifDocsAsync.started]: (state) => ({ ...state, loading: true }),
    [getXifDocsAsync.failed]: (state) => ({ ...state, loading: false, xifDocs: [] }),
    [getXifDocsAsync.success]: (state, action: any) => ({
      ...state,
      xifDocs: action.payload.data as any,
      loading: false,
    }),
    [getDocAsync.started]: (state) => ({ ...state, loading: true }),
    [getDocAsync.failed]: (state) => ({ ...state, doc: {} as any, loading: false }),
    [getDocAsync.success]: (state, action: any) => ({
      ...state,
      docToUpdate: {
        ...state.docToUpdate,
        id: action.payload.data.id,
        docType: action.payload.data.docType,
        formSection: action.payload.data as any,
      },
      loading: false,
    }),
    [getXifDocTypesAsync.started]: (state) => ({ ...state, loading: true }),
    [getXifDocTypesAsync.failed]: (state) => ({ ...state, xifDocTypes: {} as any, loading: false }),
    [getXifDocTypesAsync.success]: (state, action: any) => ({
      ...state,
      xifDocTypes: action.payload.data as any,
      loading: false,
    }),
    [sendFilterFormAsync.started]: (state) => ({ ...state, loading: true }),
    [sendFilterFormAsync.failed]: (state) => ({ ...state, xifDocs: [], loading: false }),
    [sendFilterFormAsync.success]: (state, action: any) => ({
      ...state,
      xifDocs: action.payload.data as any,
      loading: false,
    }),
    [getCompanyInfoAsync.started]: (state) => ({ ...state, loading: true }),
    [getCompanyInfoAsync.failed]: (state) => ({ ...state, companyInfo: {} as any, loading: false }),
    [getCompanyInfoAsync.success]: (state, action: any) => ({
      ...state,
      companyInfo: action.payload.data,
      loading: false,
    }),
    [getCurrencyAsync.started]: (state) => ({ ...state, loading: true }),
    [getCurrencyAsync.failed]: (state) => ({ ...state, currency: [], loading: false }),
    [getCurrencyAsync.success]: (state, action: any) => ({
      ...state,
      currency: action.payload.data,
      loading: false,
    }),
    [getFileAsync.started]: (state) => ({ ...state, loading: true }),
    [getFileAsync.failed]: (state) => ({ ...state, file: null, loading: false }),
    [getFileAsync.success]: (state, action: any) => ({
      ...state,
      file: action.payload.data,
      loading: false,
    }),
    [toogleFiltering]: (state, action: any) => ({ ...state, isFiltered: action.payload }),
    [clearDoc]: (state, action: any) => ({ ...state, docToUpdate: {} as any }),
  },
  initialState
);
