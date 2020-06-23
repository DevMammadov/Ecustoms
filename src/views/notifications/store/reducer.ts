import { handleActions } from "redux-actions";
import {
  getLastNotifyAsync,
  getNotifyAsync,
  getFilterFieldsAsync,
  sendNotifyFilterFormAsync,
  togglePage,
  toogleFiltering,
} from "./action";
import { INotify, IFilter, INotification } from "../types";

export interface INotifyState {
  lastNotify: INotify[];
  filters: IFilter[];
  notifications: INotification;
  page: number;
  isFiltered: boolean;
  loading: boolean;
}

const initialState: INotifyState = {
  lastNotify: [],
  notifications: {} as any,
  filters: [],
  page: 1,
  isFiltered: false,
  loading: false,
};

export default handleActions(
  {
    [getLastNotifyAsync.started]: (state) => ({ ...state, loading: true }),
    [getLastNotifyAsync.failed]: (state) => ({ ...state, lastNotify: [], loading: false }),
    [getLastNotifyAsync.success]: (state, action: any) => ({
      ...state,
      lastNotify: action.payload.data,
      loading: false,
    }),
    [getNotifyAsync.started]: (state) => ({ ...state, loading: true }),
    [getNotifyAsync.failed]: (state) => ({ ...state, loading: false }),
    [getNotifyAsync.success]: (state, action: any) => ({
      ...state,
      notifications: action.payload.data,
      loading: false,
    }),
    [getFilterFieldsAsync.started]: (state) => ({ ...state, loading: true }),
    [getFilterFieldsAsync.failed]: (state) => ({ ...state, loading: false }),
    [getFilterFieldsAsync.success]: (state, action: any) => ({
      ...state,
      filters: action.payload.data,
      loading: false,
    }),
    [sendNotifyFilterFormAsync.started]: (state) => ({ ...state, loading: true }),
    [sendNotifyFilterFormAsync.failed]: (state) => ({ ...state, loading: false }),
    [sendNotifyFilterFormAsync.success]: (state, action: any) => ({
      ...state,
      notifications: action.payload.data,
      loading: false,
    }),
    [togglePage]: (state, action: any) => ({ ...state, page: action.payload }),
    [toogleFiltering]: (state, action: any) => ({ ...state, isFiltered: action.payload }),
  },
  initialState
);
