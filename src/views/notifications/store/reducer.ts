import { handleActions } from "redux-actions";
import { getLastNotifyAsync, getNotifyAsync, getFilterFieldsAsync, toggleFilter } from "./action";
import { INotify, IFilter, INotification, INotifyFilter } from "../types";

export interface INotifyState {
  lastNotify: INotify[];
  filters: IFilter[];
  notifications: INotification;
  filter: INotifyFilter;
  loading: boolean;
}

const initialState: INotifyState = {
  lastNotify: [],
  notifications: {} as any,
  filters: [],
  loading: false,
  filter: {
    limit: 10,
    offset: 1,
    gridFilter: "main",
    isFiltered: false,
    form: {},
  },
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
    [toggleFilter]: (state, action: any) => ({ ...state, filter: action.payload }),
  },
  initialState
);
