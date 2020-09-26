import { handleActions } from "redux-actions";
import { IPersmission } from "types";
import { IPermissionUser, IUserPermissionFilter, IUserToUpdate } from "../types";
import { toggleFilter, searchByPinAsync, getUserPermsAsync, getAllPermissionsAsync } from "./action";

export interface IUserPermissionState {
  users: IPermissionUser[];
  user: IUserToUpdate;
  allPermissions: IPersmission;
  filter: IUserPermissionFilter;
  loading: boolean;
}

const initialState: IUserPermissionState = {
  users: [],
  user: {} as any,
  allPermissions: {} as any,
  filter: {
    limit: 10,
    offset: 0,
    isFiltered: false,
    form: {},
  },
  loading: false,
};

export default handleActions(
  {
    [searchByPinAsync.started]: (state: any) => ({ ...state, loading: true }),
    [searchByPinAsync.failed]: (state: any) => ({ ...state, loading: false }),
    [searchByPinAsync.success]: (state: any, action: any) => ({
      ...state,
      user: {
        ...state.user,
        fullName: action.payload.data.fullName,
        userSignatureList: action.payload.data.userSignatureList,
      },
      loading: false,
    }),
    [getUserPermsAsync.started]: (state: any) => ({ ...state, loading: true }),
    [getUserPermsAsync.failed]: (state: any) => ({ ...state, loading: false }),
    [getUserPermsAsync.success]: (state: any, action: any) => ({
      ...state,
      user: {
        ...state.user,
        permissions: action.payload?.data,
      },
      loading: false,
    }),
    [getAllPermissionsAsync.started]: (state: any) => ({ ...state, loading: true }),
    [getAllPermissionsAsync.failed]: (state: any) => ({ ...state, loading: false }),
    [getAllPermissionsAsync.success]: (state: any, action: any) => ({
      ...state,
      allPermissions: action.payload.data,
      loading: false,
    }),
    [toggleFilter]: (state, action: any) => ({
      ...state,
      filter: action.payload,
    }),
  },
  initialState
);
