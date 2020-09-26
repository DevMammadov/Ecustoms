import { INotifyState } from "./store/reducer";

export interface INotifyPage {
  getNotify(data: INotifyFilterResponse): void;
  notify: INotifyState;
  getFilterFields(): void;
  toggleStartDate(date: Date): void;
  toggleEndDate(date: Date): void;
  toggleFilter(filter: INotifyFilter): void;
}

export interface ISearchResponse {
  startDate: string;
  endDate: string;
  infoType: string;
  offset: number;
  limit?: number;
}

export interface INotify {
  idn: number;
  infoText: string;
  infoType: string;
  insertDate: string;
  objCode: string;
  objId: number;
  readed: string;
}

export interface IFilter {
  idn: number;
  name: string;
}

export interface INotification {
  count: number;
  notify: INotify[];
}

export interface IFilterFormState {
  startDate: string;
  endDate: string;
  infoType: string;
}

export interface INotifyFilterForm {
  startDate?: string;
  endDate?: string;
  infoIdn?: IFilter[];
}

export interface INotifyFilter {
  isFiltered: boolean;
  offset: number;
  limit: number;
  gridFilter: string;
  form: INotifyFilterForm;
}

export interface INotifyFilterResponse {
  gridFilter: string;
  offset: number;
  limit: number;
  filter?: INotifyFilterForm;
}
