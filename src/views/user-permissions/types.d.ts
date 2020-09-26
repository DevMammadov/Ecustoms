import { IPersmission } from "types";

export interface IUserPermissionsPage {
  userPermState: IUserPermissions;
  toggleFilter(data: IUserPermissionFilter);
}

export interface IUserCartType {
  cardType: number;
  signatureNumber: string[];
}

export interface IUserToUpdate {
  fullName: string;
  userSignatureList: IUserCardType[];
  pin: string;
  permissions: IPersmission;
}

export interface IPermissionUser {
  signatureNumber: string;
  pinCode: string;
  fullName: string;
  status: number;
}

export interface IUserPermissionFilter {
  limit: number;
  offset: number;
  isFiltered: boolean;
  form: any;
}

export interface IUserCardType {
  cardType: number;
  signatureNumber: string[];
}

export interface IPermissionPayload {
  pin: string;
  signature: string;
}
