import { handleActions } from "redux-actions";
import { IXifDoc, ICompanyInfo, ICurrency, IDocToUpdate, IXifFilter } from "../types";
import {
  getXifDocsAsync,
  getXifDocTypesAsync,
  getCompanyInfoAsync,
  getCurrencyAsync,
  getFileAsync,
  getDocAsync,
  clearDoc,
  searchXifDocAsync,
  toggleFilter,
} from "./action";
import { ISelectItems } from "types";

export interface IXifDocsState {
  xifDocs: IXifDoc[];
  docToUpdate: IDocToUpdate;
  xifDocTypes: ISelectItems[];
  companyInfo: ICompanyInfo;
  currency: ICurrency[];
  file: any;
  filter: IXifFilter;
  loading: boolean;
}

const initialState: IXifDocsState = {
  xifDocs: [],
  docToUpdate: {} as any,
  xifDocTypes: [],
  currency: [],
  companyInfo: {} as any,
  filter: {
    isFiltered: false,
    form: {} as any,
  },
  file: null,
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
    [searchXifDocAsync.started]: (state) => ({ ...state, loading: true }),
    [searchXifDocAsync.failed]: (state) => ({ ...state, loading: false, xifDocs: [] }),
    [searchXifDocAsync.success]: (state, action: any) => ({
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
        pinCode: action.payload.data.pinCode,
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
    [clearDoc]: (state, action: any) => ({ ...state, docToUpdate: {} as any }),
    [toggleFilter]: (state, action: any) => ({ ...state, filter: action.payload }),
  },
  initialState
);
