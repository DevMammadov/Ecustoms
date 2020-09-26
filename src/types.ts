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

export interface ILocalTokenPerson {
  userId: number;
  certId: number;
  name: string;
  surname: string;
  fatherName: string;
  birthDate: string;
  pin: string;
  voen: string;
  citizenship: string;
  hasStamp: boolean;
}

export interface ILocalTokenDecoded {
  person: ILocalTokenPerson;
  permissions: IMainPermissions & IInfoPermissions;
  nbf: number;
  exp: number;
  iss: string;
  aud: string;
}

export interface IAsanTokenDecoded {
  citizenship: string;
  fatherName: string;
  name: string;
  pin: string;
  selectedCertNumber: string;
  structureData: IStructureData;
  surname: string;
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

export interface IUnit {
  id: number;
  code: string;
  name: string;
  abbreviation2?: any;
  abbreviation3?: any;
}

// General
export interface IPagingPayload {
  offset: number;
  limit?: number;
}

export interface ISelectItems {
  idn: number;
  name: string;
}

// Permissions
export interface IMainPermissions {
  eImpexp: number;
  eResmur: number;
  eQisabeyan: number;
  eDocument: number;
  eYgb: number;
  eActivate: number;
  eGbAccess: number;
  eReggoods: number;
  eBrHsb: number;
  eBrDolayi: number;
  eBrBirbasa: number;
}

export interface IInfoPermissions {
  eGbInfo: number;
  eMalInfo: number;
  eSerInfo: number;
}

export interface IPersmission {
  mainPermissions: IMainPermissions;
  infoPermissions: IInfoPermissions;
}
