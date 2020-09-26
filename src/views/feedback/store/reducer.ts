import { handleActions } from "redux-actions";
import { ICategory } from "../types";
import { getCategoriesAsync, submitFeedbackAsync, setCurrentStep } from "./action";

export interface IFeedbackState {
  loading: boolean;
  currentStep: number;
  categories: ICategory[];
  subCategories: ICategory[];
}

const initialState: IFeedbackState = {
  loading: false,
  currentStep: 0,
  categories: [],
  subCategories: [],
};

export default handleActions(
  {
    [getCategoriesAsync.started]: (state: IFeedbackState) => ({ ...state, loading: true }),
    [getCategoriesAsync.failed]: (state: IFeedbackState) => ({ ...state, loading: false }),
    [getCategoriesAsync.success]: (state: IFeedbackState, action: any) => {
      return typeof action.payload.id === "object"
        ? {
            ...state,
            loading: false,
            categories: action.payload?.data?.data,
          }
        : {
            ...state,
            loading: false,
            subCategories: action.payload?.data?.data,
          };
    },
    [submitFeedbackAsync.started]: (state: IFeedbackState) => ({ ...state, loading: true }),
    [submitFeedbackAsync.failed]: (state: IFeedbackState) => ({ ...state, loading: false }),
    [submitFeedbackAsync.success]: (state: IFeedbackState) => ({
      ...state,
      loading: false,
    }),
    [setCurrentStep]: (state, action: any) => ({ ...state, currentStep: action.payload }),
  },
  initialState
);
