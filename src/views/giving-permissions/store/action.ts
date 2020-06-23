import { createActionFactory } from "helpers";

const factory = createActionFactory("PERMISSIONS");

export const getWorkers = factory.create("GET_WORKERS");
export const getWorkersAsync = factory.createAsync("GET_WORKERS_ASYNC");

export const getWorkerSert = factory.create("GET_WORKER_SERT");
export const getWorkerSertAsync = factory.createAsync("GET_WORKER_SERT_ASYNC");

export const setSearchPin = factory.create("SET_SEARCH_PIN");
export const setSertNumber = factory.create("SET_SERT_NUMBER");
export const setSearchSert = factory.create("SET_SEARCH_SERT");

export const getWorkerPermission = factory.create("GET_WORKER_PERMISSION");
export const getWorkerPermissionAsync = factory.createAsync("GET_WORKER_PERMISSION_ASYNC");

export const updateWorkerPermission = factory.create("UPDATE_WORKER_PERMISSION");
export const updateWorkerPermissionAsync = factory.createAsync("UPDATE_WORKER_PERMISSION_ASYNC");

export const updateWorkerActivity = factory.create("UPDATE_WORKER_ACTIVITY");
export const updateWorkerActivityAsync = factory.createAsync("UPDATE_WORKER_ACTIVITY_ASYNC");

export const removeWorkerPermissions = factory.create("REMOVE_WORKER_PERMISSIONS");
export const removeWorkerPermissionsAsync = factory.createAsync("REMOVE_WORKER_PERMISSIONS_ASYNC");

export const toggleWorkerPermission = factory.create("TOGGLE_WORKER_PERMISSION");
export const clearSingleWorker = factory.create("CLEAR_SINGLE_WORKER");

export const PermissionsActions = {
  getWorkers,
  getWorkersAsync,
  getWorkerSert,
  getWorkerSertAsync,
  getWorkerPermission,
  getWorkerPermissionAsync,
  setSearchPin,
  setSertNumber,
  clearSingleWorker,
  updateWorkerPermission,
  updateWorkerPermissionAsync,
  toggleWorkerPermission,
  updateWorkerActivity,
  updateWorkerActivityAsync,
  removeWorkerPermissions,
  removeWorkerPermissionsAsync,
  setSearchSert,
};
