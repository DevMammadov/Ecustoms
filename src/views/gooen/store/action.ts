import { createActionFactory } from 'helpers';

const factory = createActionFactory('GOOEN');

export const getCountries = factory.create('GET_COUNTRIES');
export const getCountriesAsync = factory.createAsync('GET_COUNTRIES_ASYNC');

export const handleStepOne = factory.create('HANDLE_STEP_ONE');
export const handleStepOneAsync = factory.createAsync('HANDLE_STEP_ONE_ASYNC');

export const handleStepTwo = factory.create('HANDLE_STEP_TWO');
export const handleStepTwoAsync = factory.createAsync('HANDLE_STEP_TWO_ASYNC');

export const getGooenInfo = factory.create('GET_GOOEN_INFO');
export const getGooenInfoAsync = factory.createAsync('GET_GOOEN_INFO_ASYNC');

export const setCurrentStep = factory.create('SET_CURRENT_STEP');

export const updateGooen = factory.create('UPDATE_GOOEN');
export const updateGooenAsync = factory.createAsync('UPDATE_GOOEN_ASYNC');

export const clearGooenStore = factory.create('CLEAN_GOOEN_STORE');

export const GooenActions = {
  getCountries,
  getCountriesAsync,
  handleStepOne,
  handleStepOneAsync,
  handleStepTwo,
  handleStepTwoAsync,
  getGooenInfo,
  getGooenInfoAsync,
  updateGooen,
  updateGooenAsync,
  setCurrentStep,
  clearGooenStore,
};
