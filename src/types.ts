import { IMainPermissions, IInfoPermissions } from "views/giving-permissions/types";

interface IData {
  token: string;
}

interface IStructureData {
  voen: string;
  positionName: string;
  structureName: string;
  hasStamp: boolean;
  legal: boolean;
}

export interface IResponse {
  timestamp: string;
  status: number;
  description: string;
  transaction: string;
  appName: string;
  exception: null;
  data: IData;
}

export interface ISertificate {
  structureData: IStructureData;
  certificateNumber: string;
}

export interface ILocalTokenDecoded {
  userId: string;
  asa: string;
  voen: string;
  hasStamp: string;
  permissions: IMainPermissions & IInfoPermissions;
  nbf: number;
  exp: number;
  iss: string;
  aud: string;
}

export interface IUser {
  name: string;
  voen: string;
  fin: string;
  asanToken: string;
  localToken: string;
  refreshToken: string;
  sertificates: ISertificate[];
}

export interface ISendToken {
  token: string;
  voen: string | null;
}

// General
export interface IPagingPayload {
  pageNo: number;
  limit: number;
}

export interface ISelectItems {
  idn: number;
  name: string;
}
