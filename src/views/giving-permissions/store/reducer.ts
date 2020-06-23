import { handleActions } from "redux-actions";
import { ISingleWorker, IWorker } from "../types";
import {
  getWorkersAsync,
  getWorkerSertAsync,
  getWorkerPermissionAsync,
  setSearchPin,
  setSertNumber,
  clearSingleWorker,
  toggleWorkerPermission,
  setSearchSert,
} from "./action";

export interface IPermissionsState {
  singleWorker: ISingleWorker;
  workers: IWorker[];
  loading: boolean;
}

const initialState: IPermissionsState = {
  singleWorker: {} as any,
  workers: [],
  loading: false,
};

export default handleActions(
  {
    [getWorkersAsync.started]: (state) => ({ ...state, loading: true }),
    [getWorkersAsync.failed]: (state) => ({
      ...state,
      loading: false,
      workers: [],
    }),
    [getWorkersAsync.success]: (state, action: any) => ({
      ...state,
      workers: action.payload.data as any,
      loading: false,
    }),
    [getWorkerSertAsync.started]: (state) => ({ ...state, loading: true }),
    [getWorkerSertAsync.failed]: (state) => ({
      ...state,
      singleWorker: {},
      loading: false,
    }),
    [getWorkerSertAsync.success]: (state, action: any) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        fullName: action.payload.data.fullName,
        userSignatureList: action.payload.data.userSignatureList,
      },
      loading: false,
    }),
    [getWorkerPermissionAsync.started]: (state) => ({ ...state, loading: true }),
    [getWorkerPermissionAsync.failed]: (state) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        permissions: {},
      },
      loading: false,
    }),
    [getWorkerPermissionAsync.success]: (state, action: any) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        permissions: action.payload.data,
      },
      loading: false,
    }),
    [setSearchPin]: (state, action: any) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        pin: action.payload,
      },
    }),
    [setSertNumber]: (state, action: any) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        signature: action.payload,
      },
    }),
    [setSearchSert]: (state, action: any) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        sertificate: action.payload,
      },
    }),
    [toggleWorkerPermission]: (state, action: any) => ({
      ...state,
      singleWorker: {
        ...state.singleWorker,
        permissions: action.payload,
      },
    }),
    [clearSingleWorker]: (state) => ({
      ...state,
      singleWorker: {} as any,
    }),
  },
  initialState
);
