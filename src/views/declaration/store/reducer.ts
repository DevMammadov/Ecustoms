import { handleActions } from "redux-actions";
import { getDicsAsync, checkPersonalInfoAsync, setStep } from "./action";
import { IDeclaration, ICurrency } from "../types";
import { ICountry } from "views/postal-services/types";

export interface IDeclarationState {
  declaration: IDeclaration;
  Countries: ICountry[];
  activeStep: number;
  infoImproved: boolean;
  CurrencyList: ICurrency[];
  GoodsCategory: ICurrency[];
  loading: boolean;
}

const initialState: IDeclarationState = {
  declaration: [] as any,
  Countries: [] as any,
  CurrencyList: [] as any,
  GoodsCategory: [] as any,
  activeStep: 0,
  infoImproved: false,
  loading: false,
};

export default handleActions(
  {
    [getDicsAsync.started]: (state) => ({ ...state, loading: true }),
    [getDicsAsync.failed]: (state) => ({ ...state, loading: false }),
    [getDicsAsync.success]: (state, action: any) => ({
      ...state,
      ...action.payload?.data,
      loading: false,
    }),
    [checkPersonalInfoAsync.started]: (state) => ({ ...state, loading: true }),
    [checkPersonalInfoAsync.failed]: (state) => ({ ...state, loading: false, infoImproved: false }),
    [checkPersonalInfoAsync.success]: (state, action: any) => ({
      ...state,
      infoImproved: true,
      loading: false,
    }),
    [setStep]: (state, action: any) => ({
      ...state,
      activeStep: action.payload,
    }),
  },
  initialState
);
