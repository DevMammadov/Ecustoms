import { handleActions } from "redux-actions";
import { searchDeclDataAsync, getDeclDocAsync } from "./actions";
import { ISearchData } from "../types";

export interface IDeclarationInfoState {
  searchData: ISearchData;
  loading: boolean;
}

const initialState: IDeclarationInfoState = {
  searchData: {} as any,
  loading: false,
};

export default handleActions(
  {
    [searchDeclDataAsync.started]: (state: any) => ({
      ...state,
      loading: true,
    }),
    [searchDeclDataAsync.failed]: (state: any) => ({
      ...state,
      loading: false,
    }),
    [searchDeclDataAsync.success]: (state: any, action: any) => ({
      ...state,
      loading: false,
      searchData: action.payload.data,
    }),
  },
  initialState
);
