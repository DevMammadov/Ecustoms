import { IPermissionsState } from "./store/reducer";

export interface IPermissionPayload {
  pin: string;
  signature: string;
}

export interface IGivingPermissionPage {
  match: any;
  getWorkers(): void;
  workers: IWorker[];
  loading: boolean;
  clearSingleWorker(): void;
}

export interface IManagePage {
  permissions: IPermissionsState;
  showSearchBar?: boolean;
  localToken: string;
  getWorkerSert(pin: string): void;
  setSearchPin(pin: string): void;
  setSertNumber(sert: string): void;
  setSearchSert(sert: number): void;
  updateWorkerPermission(data: any): void;
  toggleWorkerPermission(data: IPersmission): void;
  getWorkerPermission(payload: IPermissionPayload): void;
  clearSingleWorker(): void;
}

export interface IWorkerListPage {
  workers: IWorker[];
  removeWorkerPermissions(data: IPermissionPayload): void;
  updateWorkerActivity(data: IActivity): void;
  clearSingleWorker(): void;
  setSearchPin(pin: string): void;
  setSertNumber(sert: string): void;
  getWorkerPermission(payload: IPermissionPayload): void;
  width: any;
}

export interface ISertificatePage {
  singleWorler: ISingleWorker;
  onSelect(pin: number): void;
  selected: number;
}

export interface ISignatureListPage {
  signatures: string[];
  onSelect(pin: string): void;
  selected?: string;
  disabled?: boolean;
}

export interface ISearchPage {
  onSearch(text: string): void;
  defaultValue: string;
}

export interface ICheckboxes {
  permissions: IPersmission;
  onSend(): void;
  onCheck(data: IPersmission): void;
  title?: string;
  loading: boolean;
  width: any;
}

export interface IActivity {
  signatureNumber: string;
  pinCode: string;
  activityStatus: string;
}

/* --------- Reducer types --------- */

export interface IWorkerCartType {
  cardType: number;
  signatureNumber: string[];
}

export interface ISingleWorker {
  fullName: string;
  userSignatureList: IWorkerCartType[];
  pin: string;
  signature: string;
  sertificate: number;
  permissions: IPersmission;
}

export interface IWorker {
  signatureNumber: string;
  pinCode: string;
  fullName: string;
  status: number;
}

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
  errorMessage: string;
}
