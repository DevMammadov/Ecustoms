export interface IInfo {
  pinCode: string;
  signatureNumber: string;
  voen: string;
  fullName: string;
  hasStamp: number;
  address: string;
  phone: string;
  email: string;
  status: string;
  greenCor: string[];
  kargo: number;
  eBirbasa: number;
  eDolayi: number;
  attestatNo: string;
  attestatDate: string;
  companyName: string;
  companyAddress: string;
  representation: string;
}

export interface IBankInfo {
  voen: string;
  code: string;
  name: string;
  accountNo: string;
  currency: string;
  status: string;
  state: string;
}

export interface ICustomsWarehousesInfo {
  voen: string;
  code: string;
  name: string;
  address: string;
  area: string;
  depoType: string;
  status: string;
  customsStatus: number | string;
}

export interface IUserField {
  field: string;
  orderNumber: number;
  active: number;
}

export interface IUserContacts {
  phoneNumbers: IUserField[];
  emails: IUserField[];
  numberConfirmed: boolean;
  emailconfirmed: boolean;
  phoneNumber: string | null;
  emailAddress: string | null;
  errorMessage: string;
}

export interface IConfirmPayload {
  address: string | null;
  confirmCode: string;
}

export interface IToggleActivityPayload {
  status: number;
  order: number;
}

export interface IInfoFormData {
  email: string;
  phone: string;
  address: string;
}

export interface IIinfoPage {
  info: IInfo;
  getInfo(): void;
  updateInfo(info: IInfoFormData): void;
  localToken: string;
  loading: boolean;
}

export interface ISmsInfoPage {
  getUserContacts(): void;
  loading: boolean;
  contacts: IUserContacts;
  sendUserNumber(number: string): void;
  sendNumberCode(data: IConfirmPayload): void;
  removeNumber(data: number): void;
  saveUserNumber(number: string | null): void;
  saveUserEmail(email: string | null): void;
  sendUserEmailCode(data: IConfirmPayload): void;
  sendUserEmail(number: string): void;
  removeEmail(email: number): void;
  toggleNumberActivity(data: IToggleActivityPayload): void;
  toggleEmailActivity(data: IToggleActivityPayload): void;
  localToken: string;
  width: any;
  pageLoading: boolean;
}
