import { IPostalServicesState } from "./store/reducer";
import { IPagingPayload } from "types";

export interface IPostalServicesPage {
  getSubData(fin: string): void;
  postalState: IPostalServicesState;
  removePostal(payload: { id: number; fin: string }): void;
  toggleFilter(filter: IPostalFilter): void;
  getPostal(data: IPostalFilterResponse): void;
  filters: IPostalFilterForm;
  getCountries(): void;
}

export interface IError {
  name: string;
  value: string;
  error: number;
}

export interface IFileErrors {
  goodNo: number;
  errors: IError[];
}

export interface IFailWarning {
  index: string;
  message: string;
}

export interface IGood {
  CURRENCY_TYPE: string;
  DIRECTION: string;
  FIN: string;
  GOODS_TRAFFIC_FR: string;
  GOODS_TRAFFIC_TO: string;
  IDXAL_ADRESS: string;
  IDXAL_NAME: string;
  INVOYS_PRICE: string;
  IXRAC_ADRESS: string;
  IXRAC_NAME: string;
  NAME_OF_GOODS: string;
  PHONE: string;
  QAIME: string;
  QUANTITY_OF_GOODS: string;
  TRACKING_NO: string;
  TR_NUMBER: string;
  WEIGHT_GOODS: string;
}

export interface IPostalHeader {
  fin: string;
  idxaL_NAME: string;
  phone: string;
}

export interface IPostals {
  idn: number;
  tR_NUMBER: string;
  direction: number;
  quantitY_OF_GOODS: number;
  weighT_GOODS: number;
  invoyS_PRICE: number;
  currencY_TYPE: string;
  namE_OF_GOODS: string;
  idxaL_NAME: string;
  idxaL_ADRESS: string;
  ixraC_NAME: string;
  ixraC_ADRESS: string;
  goodS_TRAFFIC_FR: string;
  goodS_TRAFFIC_TO: string;
  qaime: string;
  trackinG_NO: string;
  inserT_DATE: string;
  senT_ST: number;
}

export interface IPostalData {
  headers: IPostalHeader[];
  count: number;
}

export interface ISubData {
  fin: string;
  data: IPostals[];
}

export interface IPostalFilter {
  limit: number;
  offset: number;
  isFiltered: boolean;
  form: IPostalFilterForm;
}

export interface IPostalFilterForm {
  startDate?: Date | string;
  endDate?: Date | string;
  goodS_ID?: string | null;
  namE_OF_GOODS?: string | null;
  idxaL_NAME?: string | null;
  goodS_TRAFFIC_FR?: string | null;
  tR_NUMBER?: string | null;
}

export interface IPostalFilterResponse {
  filter?: IPostalFilterForm;
  limit?: number;
  offset?: number;
}

export interface ICountry {
  code: string;
  name: string;
}
