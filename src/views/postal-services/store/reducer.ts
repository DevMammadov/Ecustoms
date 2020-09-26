import { handleActions } from "redux-actions";
import {
  saveGood,
  setIndex,
  setFail,
  setWarning,
  clearStatus,
  setSuccess,
  getSubDataAsync,
  toggleFilter,
  removeSubData,
  getPostalAsync,
  getCountriesAsync,
} from "./action";
import { IGood, IFailWarning, IPostalData, ISubData, IPostalFilter } from "../types";
import { ICountry } from "views/gooen/types";

export interface IPostalServicesState {
  xmlGoods: IGood[];
  fails: IFailWarning[];
  warnings: IFailWarning[];
  successCount: number;
  uploadIndex: number;
  data: IPostalData;
  subData: ISubData[];
  filter: IPostalFilter;
  countries: ICountry[];
  loading: boolean;
}

const initialState: IPostalServicesState = {
  xmlGoods: [],
  fails: [],
  warnings: [],
  successCount: 0,
  uploadIndex: 0,
  countries: [],
  data: {
    headers: [],
    count: 0,
  },
  filter: {
    limit: 10,
    offset: 1,
    isFiltered: false,
    form: {},
  },
  subData: [],
  loading: false,
};

export default handleActions(
  {
    [saveGood]: (state, action: any) => ({ ...state, xmlGoods: action.payload }),
    [setIndex]: (state, action: any) => ({ ...state, uploadIndex: action.payload }),
    [setFail]: (state, action: any) => ({ ...state, fails: [...state.fails, action.payload] }),
    [setWarning]: (state, action: any) => ({ ...state, warnings: [...state.warnings, action.payload] }),
    [setSuccess]: (state, action: any) => ({ ...state, successCount: action.payload }),
    [clearStatus]: (state, action: any) => ({
      ...state,
      warnings: [],
      fails: [],
      uploadIndex: 0,
      successCount: 0,
    }),
    [getPostalAsync.started]: (state, action: any) => ({ ...state, loading: true }),
    [getPostalAsync.failed]: (state, action: any) => ({
      ...state,
      loading: false,
      subData: [],
      data: {
        ...state.data,
        count: 0,
        headers: [],
      },
    }),
    [getPostalAsync.success]: (state, action: any) => ({
      ...state,
      data: {
        ...state.data,
        count: action.payload.data.count,
        headers: action.payload.data.postalServices,
      },
      loading: false,
    }),
    [getSubDataAsync.started]: (state) => ({ ...state, loading: true }),
    [getSubDataAsync.failed]: (state) => ({ ...state, loading: false, postalData: [] }),
    [getSubDataAsync.success]: (state, action: any) => ({
      ...state,
      subData: [...state.subData, action.payload],
      loading: false,
    }),
    [getCountriesAsync.started]: (state) => ({ ...state, loading: true }),
    [getCountriesAsync.failed]: (state) => ({ ...state, loading: false }),
    [getCountriesAsync.success]: (state, action: any) => ({
      ...state,
      countries: action.payload.data,
      loading: false,
    }),
    [removeSubData]: (state, action: any) => {
      return {
        ...state,
        subData: state.subData?.filter((sb) => !action.payload.includes(sb.fin)),
      };
    },
    [toggleFilter]: (state, action: any) => ({
      ...state,
      filter: action.payload,
    }),
  },
  initialState
);
