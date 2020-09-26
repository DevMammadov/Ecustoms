import { createActionFactory } from "helpers";

const factory = createActionFactory("FEEDBACK");

export const getCategories = factory.create("GET_CATEGORIES");
export const getCategoriesAsync = factory.createAsync("GET_CATEGORIES_ASYNC");

export const submitFeedback = factory.create("SUBMIT_FEEDBACK");
export const submitFeedbackAsync = factory.createAsync("SUBMIT_FEEDBACK_ASYNC");

export const setCurrentStep = factory.create("SET_CURRENT_STEP");

export const FeedbackActions = {
  getCategories,
  getCategoriesAsync,
  submitFeedback,
  submitFeedbackAsync,
  setCurrentStep,
};
