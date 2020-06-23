import { INotifyState } from "./store/reducer";

export interface INotifyPage {
  getNotify(data: { offset: number; limit?: number }): void;
  notify: INotifyState;
  getFilterFields(): void;
  toggleStartDate(date: Date): void;
  toggleEndDate(date: Date): void;
  sendNotifyFilterForm(form: ISearchResponse): void;
  togglePage(page: number): void;
  toogleFiltering(isFiltering: boolean): void;
  filters: any;
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
