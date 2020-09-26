import { handleActions } from "redux-actions";
import {
  getCargoAsync,
  clearStatus,
  saveGood,
  setIndex,
  setFail,
  sendFileAsync,
  setSuccess,
  getSubDataAsync,
  getCountriesAsync,
  toggleFilter,
} from "./action";
import { ICargoXmlGood, ICargoData, IFileSendStatus, ISubData, ICargoFilter } from "../types";
import { IFailWarning, ICountry } from "views/postal-services/types";

export interface ICargoState {
  xmlGoods: ICargoXmlGood[];
  fails: IFailWarning[];
  successCount: number;
  uploadIndex: number;
  data: ICargoData;
  fileSendStatus: IFileSendStatus;
  filter: ICargoFilter;
  countries: ICountry[];
  subData: ISubData[];
  loading: boolean;
}

const initialState: ICargoState = {
  xmlGoods: [],
  fails: [],
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
  fileSendStatus: {
    status: "stabile",
    text: "",
  },
  loading: false,
};

export default handleActions(
  {
    [saveGood]: (state, action: any) => ({ ...state, xmlGoods: action.payload }),
    [setIndex]: (state, action: any) => ({ ...state, uploadIndex: action.payload }),
    [setFail]: (state, action: any) => ({ ...state, fails: [...state.fails, action.payload] }),
    [setSuccess]: (state, action: any) => ({ ...state, successCount: action.payload }),
    [clearStatus]: (state, action: any) => ({
      ...state,
      warnings: [],
      fails: [],
      uploadIndex: 0,
      successCount: 0,
      fileSendStatus: "",
    }),
    [getCargoAsync.started]: (state) => ({ ...state, loading: true }),
    [getCargoAsync.failed]: (state) => ({
      ...state,
      loading: false,
      subData: [],
      data: {
        ...state.data,
        count: 0,
        headers: [],
      },
    }),
    [getCargoAsync.success]: (state, action: any) => ({
      ...state,
      data: {
        ...state.data,
        count: action.payload.data.count,
        headers: action.payload.data.cargo,
      },
      loading: false,
    }),
    [getSubDataAsync.started]: (state) => ({ ...state, loading: true }),
    [getSubDataAsync.failed]: (state) => ({ ...state, loading: false, subData: [] }),
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
    [sendFileAsync.started]: (state, action: any) => ({
      ...state,
      loading: true,
      fileSendStatus: { text: "", status: "uploading" },
    }),
    [sendFileAsync.failed]: (state, action: any) =>
      ({
        ...state,
        fileSendStatus: {
          text:
            action.payload?.response?.data?.exception?.status === "warn"
              ? action.payload?.response?.data?.exception?.errorMessage
              : "",
          status: "fail",
        },
        loading: false,
      } as any),
    [sendFileAsync.success]: (state, action: any) => ({
      ...state,
      loading: false,
      fileSendStatus: { text: "", status: "success" },
    }),
    [toggleFilter]: (state, action: any) => ({ ...state, filter: action.payload }),
  },
  initialState
);
