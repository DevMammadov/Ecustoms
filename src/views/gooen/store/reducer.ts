import { handleActions } from "redux-actions";
import { ICountry, IPerson, IGooenResult } from "../types";
import {
  getCountriesAsync,
  handleStepOneAsync,
  handleStepTwoAsync,
  setCurrentStep,
  clearGooenStore,
  getGooenInfoAsync,
  updateGooenAsync,
} from "./action";

export interface IGooenState {
  countries: {
    loading: boolean;
    data: ICountry[];
  };
  currentStep: number;
  loading: boolean;
  person: IPerson;
  result: IGooenResult;
}

const initialState: IGooenState = {
  countries: {
    loading: false,
    data: [],
  },
  currentStep: 0,
  loading: false,
  person: {} as any,
  result: {} as any,
};

export default handleActions(
  {
    [getCountriesAsync.started]: (state: IGooenState) => ({
      ...state,
      countries: {
        ...state.countries,
        loading: true,
      },
    }),
    [getCountriesAsync.failed]: (state: IGooenState) => ({
      ...state,
      countries: {
        data: [],
        loading: false,
      },
    }),
    [getCountriesAsync.success]: (state: IGooenState, action: any) => ({
      ...state,
      countries: {
        data: action.payload.data,
        loading: false,
      },
    }),
    [handleStepOneAsync.started]: (state: IGooenState) => ({ ...state, loading: true }),
    [handleStepOneAsync.failed]: (state: IGooenState) => ({ ...state, loading: false }),
    [handleStepOneAsync.success]: (state: IGooenState, action: any) => ({
      ...state,
      loading: false,
      person: action.payload.data,
    }),
    [handleStepTwoAsync.started]: (state: IGooenState) => ({
      ...state,
      loading: true,
    }),
    [handleStepTwoAsync.failed]: (state: IGooenState) => ({
      ...state,
      loading: false,
    }),
    [handleStepTwoAsync.success]: (state: IGooenState, action: any) => ({
      ...state,
      loading: false,
      result: action.payload.data,
    }),
    [getGooenInfoAsync.started]: (state: IGooenState) => ({ ...state, loading: true }),
    [getGooenInfoAsync.failed]: (state: IGooenState) => ({ ...state, loading: false }),
    [getGooenInfoAsync.success]: (state: IGooenState, action: any) => ({
      ...state,
      loading: false,
      result: action.payload.data,
    }),
    [updateGooenAsync.started]: (state: IGooenState) => ({ ...state, loading: true }),
    [updateGooenAsync.failed]: (state: IGooenState) => ({ ...state, loading: false }),
    [updateGooenAsync.success]: (state: IGooenState, action: any) => ({
      ...state,
      loading: false,
      result: action.payload.data,
    }),
    [setCurrentStep]: (state, action: any) => ({ ...state, currentStep: action.payload }),
    [clearGooenStore]: (state, action: any) => ({
      ...state,
      currentStep: 0,
      loading: false,
      person: {} as any,
      result: {} as any,
    }),
  },
  initialState
);
