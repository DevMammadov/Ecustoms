import { handleActions } from "redux-actions";
import {
  toggleFilter,
  setStep,
  getDicsAsync,
  getGoodsGroupAsync,
  calculateGoodAsync,
  addToTotal,
  getCompaniesAsync,
  setUpdateIndex,
  getTotalPricesAsync,
  addDeclarationAsync,
  emptyTotalObject,
  searchDeclarationsAsync,
  getDeclarationInfoAsync,
  clearDecInfo,
} from "./action";
import {
  IDeclarationFilter,
  IGoodGroup,
  IGoodResponse,
  ITotalObject,
  ICompany,
  IDeclarationList,
  ITotalPrice,
  IDeclarationInfo,
} from "../types";
import { ICountry } from "views/postal-services/types";
import { ICurrency } from "views/declaration/types";
import { IUnit } from "types";
import { postExamle } from "./examle";

export interface IPostDeclarationState {
  Countries: ICountry[];
  MainCurrenciesList: ICurrency[];
  declarations: IDeclarationList;
  MainUnits: IUnit[];
  companies: ICompany[];
  groups: IGoodGroup[];
  subGroups: IGoodGroup[];
  filter: IDeclarationFilter;
  activeStep: number;
  goods: IGoodResponse;
  totalObject: ITotalObject;
  updateIndex: number | null;
  totalPrice: ITotalPrice;
  declarationNumber: string;
  declarationInfo: IDeclarationInfo;
  loading: boolean;
}

const initialState = postExamle;

// const initialState: IPostDeclarationState = {
//   Countries: [],
//   MainCurrenciesList: [],
//   MainUnits: [],
//   companies: [],
//   groups: [],
//   subGroups: [],
//   goods: {} as any,
//   totalObject: {
//     goodsList: [],
//     receiver: {} as any,
//     sender: {} as any,
//   },
//   declarations: {
//     declarations: [],
//     count: 0,
//   },
//   totalPrice: {} as any,
//   filter: {
//     limit: 10,
//     offset: 1,
//     isFiltered: false,
//     form: {} as any,
//   },
//   declarationInfo: {} as any,
//   activeStep: 0,
//   updateIndex: null,
//   declarationNumber: "",
//   loading: false,
// };

export default handleActions(
  {
    [getDicsAsync.started]: (state) => ({ ...state, loading: true }),
    [getDicsAsync.failed]: (state) => ({ ...state, loading: false }),
    [getDicsAsync.success]: (state, action: any) => ({
      ...state,
      ...action.payload?.data,
      loading: false,
    }),
    [searchDeclarationsAsync.started]: (state) => ({ ...state, loading: true }),
    [searchDeclarationsAsync.failed]: (state) => ({
      ...state,
      declarations: initialState.declarations,
      loading: false,
    }),
    [searchDeclarationsAsync.success]: (state, action: any) => ({
      ...state,
      declarations: action.payload?.data,
      loading: false,
    }),
    [getDeclarationInfoAsync.started]: (state) => ({ ...state, loading: true }),
    [getDeclarationInfoAsync.failed]: (state) => ({ ...state, loading: false }),
    [getDeclarationInfoAsync.success]: (state, action: any) => ({
      ...state,
      declarationInfo: action.payload?.data,
      loading: false,
    }),
    [getTotalPricesAsync.started]: (state) => ({ ...state, loading: true }),
    [getTotalPricesAsync.failed]: (state) => ({ ...state, loading: false }),
    [getTotalPricesAsync.success]: (state, action: any) => ({
      ...state,
      totalPrice: action.payload?.data,
      loading: false,
    }),
    [getGoodsGroupAsync.started]: (state) => ({ ...state, loading: true }),
    [getGoodsGroupAsync.failed]: (state) => ({ ...state, groups: [], loading: false }),
    [getGoodsGroupAsync.success]: (state, action: any) => {
      return typeof action.payload?.id === "object"
        ? {
            ...state,
            loading: false,
            groups: action.payload?.data?.data,
          }
        : {
            ...state,
            loading: false,
            subGroups: action.payload?.data?.data,
          };
    },
    [calculateGoodAsync.started]: (state) => ({ ...state, loading: true }),
    [calculateGoodAsync.failed]: (state) => ({ ...state, loading: false }),
    [calculateGoodAsync.success]: (state, action: any) => ({
      ...state,
      goods: {
        ...state.goods,
        totalPrices: action.payload?.data?.totalPrices,
        exceed: action.payload?.data?.exceed,
      },
      totalObject: {
        ...state.totalObject,
        goodsList: action.payload?.data?.goodsInvoicePriceList,
      },
      loading: false,
    }),
    [getCompaniesAsync.started]: (state) => ({ ...state, loading: true }),
    [getCompaniesAsync.failed]: (state) => ({ ...state, loading: false }),
    [getCompaniesAsync.success]: (state, action: any) => ({
      ...state,
      companies: action.payload?.data,
      loading: false,
    }),
    [addDeclarationAsync.started]: (state) => ({ ...state, loading: true }),
    [addDeclarationAsync.failed]: (state) => ({ ...state, loading: false }),
    [addDeclarationAsync.success]: (state, action: any) => ({
      ...state,
      declarationNumber: action.payload?.data,
      activeStep: 3,
      loading: false,
    }),
    [toggleFilter]: (state, action: any) => ({
      ...state,
      filter: action.payload,
    }),
    [setStep]: (state, action: any) => ({
      ...state,
      activeStep: action.payload,
    }),
    [addToTotal]: (state, action: any) => ({
      ...state,
      totalObject: action.payload,
    }),
    [setUpdateIndex]: (state, action: any) => ({
      ...state,
      updateIndex: action.payload,
    }),
    [emptyTotalObject]: (state, action: any) => ({
      ...state,
      totalObject: initialState.totalObject,
      goods: initialState.goods,
    }),
    [clearDecInfo]: (state, action: any) => ({
      ...state,
      declarationInfo: initialState.declarationInfo,
    }),
  },
  initialState
);
