import { ICargoState } from "./store/reducer";
import { IPostalFilterResponse, IPostalFilter } from "views/postal-services/types";

export interface ICargoPage {
  cargo: ICargoState;
  getCargo(payload: IPostalFilterResponse): void;
  getSubData(idxaL_VOEN: string): void;
  getCountries(): void;
  toggleFilter(filter: IPostalFilter): void;
}

export interface IFileSendStatus {
  status: "stabile" | "uploading" | "fail" | "success";
  text: string;
}

export interface ICargoXmlGood {
  INSERT_DATE: string;
  CURRENCY_TYPE: string;
  DIRECTION: string;
  GOODS_TRAFFIC_FR: string;
  GOODS_TRAFFIC_TO: string;
  IDXAL_ADRESS: string;
  IDXAL_NAME: string;
  INVOYS_PRICE: string;
  IXRAC_ADRESS: string;
  IXRAC_NAME: string;
  NAME_OF_GOODS: string;
  QUANTITY_OF_GOODS: string;
  WEIGHT_GOODS: string;
  DESTINATION_DATE: string;
  OBJECT_ADDRESS: string;
  OBJECT_CODE: string;
  IDXAL_PHONE: string;
  IDXAL_VOEN: string;
  GOODS_CODE: string;
  QIB_NO: string;
}

export interface ICargoDataHeader {
  idxaL_NAME: string;
  idxaL_PHONE: string;
  idxaL_VOEN: string;
  countRow: 1;
}

export interface ICargoData {
  headers: ICargoDataHeader[];
  count: number;
}

export interface ICargoes {
  id: number;
  inserT_DATE: string;
  qiB_NO: string;
  direction: number;
  goodS_CODE: string;
  quantitY_OF_GOODS: number;
  weighT_GOODS: number;
  invoicE_PRICE: number;
  currencY_TYPE: string;
  namE_OF_GOODS: string;
  idxaL_VOEN: string;
  idxaL_INFO: string;
  ixraC_INFO: string;
  goodS_TRAFFIC_FR: string;
  goodS_TRAFFIC_TO: string;
  objecT_CODE?: string;
  objecT_ADDRESS?: string;
  destinatioN_DATE: string;
}

export interface ISubData {
  idxaL_VOEN: string;
  data: ICargoes[];
}

export interface ICargoFilter {
  limit: number;
  offset: number;
  isFiltered: boolean;
  form: ICargoFilterForm;
}

export interface ICargoFilterForm {
  startDate?: Date | string;
  endDate?: Date | string;
  goodS_CODE?: string | null;
  namE_OF_GOODS?: string | null;
  idxaL_NAME?: string | null;
  goodS_TRAFFIC_FR?: string | null;
  idxaL_VOEN?: string | null;
}
