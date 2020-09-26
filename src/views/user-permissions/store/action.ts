import { createActionFactory } from "helpers";

const factory = createActionFactory("USER-PERMISSIONS");

export const searchByPin = factory.create("SEARCH_BY_PIN");
export const searchByPinAsync = factory.createAsync("SEARCH_BY_PIN_ASYNC");

export const getUserPerms = factory.create("GET_USER_PERMISSIONS");
export const getUserPermsAsync = factory.createAsync("GET_USER_PERMISSIONS_ASYNC");

export const getAllPermissions = factory.create("GET_ALL_PERMISSIONS");
export const getAllPermissionsAsync = factory.createAsync("GET_ALL_PERMISSIONS_ASYNC");

export const toggleFilter = factory.create("TOGGLE_FILTER");

export const UserPermissionsActions = {
  toggleFilter,
  searchByPin,
  searchByPinAsync,
  getUserPerms,
  getUserPermsAsync,
  getAllPermissions,
  getAllPermissionsAsync,
};
