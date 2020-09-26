import { createActionFactory } from "helpers";

const factory = createActionFactory("DECLARATION");

export const getDics = factory.create("GET_DICS");
export const getDicsAsync = factory.createAsync("GET_DICS_ASYNC");

export const checkPersonalInfo = factory.create("CHECK_PERSONAL_INFO");
export const checkPersonalInfoAsync = factory.createAsync("CHECK_PERSONAL_INFO_ASYNC");

export const setStep = factory.create("SET_STEP");

export const DeclarationActions = {
  getDics,
  getDicsAsync,
  checkPersonalInfo,
  checkPersonalInfoAsync,
  setStep,
};
