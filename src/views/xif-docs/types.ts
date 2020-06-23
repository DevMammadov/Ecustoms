import { IXifDocsState } from "./store/reducer";

export interface IXifDocsPage {
  match: any;
  getXifDocs(): void;
  xifDocs: IXifDocsState;
  sendXifDocs(data: any): void;
  updateDoc(data: IUpdateDoc): void;
  toogleFiltering(isFiltering: boolean): void;
  sendFilterForm(form: ISearchResponse): void;
  getFile(id: number): void;
  removeDoc(data: IRemoveDoc): void;
}

export interface IXifDocListPage {
  xifDocs: IXifDoc[];
  onFilterStart(): void;
  sendFilterForm(form: ISearchResponse): void;
  onFileOpen(idn: number): void;
  onRemove(data: IRemoveDoc): void;
}
export interface ISearchResponse {
  startDate: string;
  endDate: string;
  docType: number;
}

export interface IAddXifDocPage {
  xifDocs: IXifDocsState;
  getXifDocTypes(): void;
  getCompanyInfo(): void;
  getCurrency(): void;
  getDoc(id: number): void;
  getFile(id: number): void;
  clearDoc(): void;
  initialValues: IDocToUpdate;
  handleSubmit: any;
  submitting: any;
  docNo: string;
  docType: number;
}

// reducer types
export interface IXifDoc {
  id: number;
  pinCode: number;
  insertDate: Date;
  typeName: string;
  note: string;
  docPath: string;
}

export interface ICompanyInfo {
  voen: string;
  companyName: string;
  companyAddress: string;
}

export interface ICurrency {
  codeN: number;
  name: string;
}

export interface IAddDocRequest {
  address: string;
  firmName: string;
  docType: number;
  hasContractNo: boolean | undefined;
  contractNo: string;
  contractDate: string;
  validityDate: string;
  invoice: number;
  currencyType: string;
  recieverVoen: string;
  recieverName: string;
  senderVoen: string;
  senderName: string;
  note: string;
  doc: any;
}

export interface IDocToUpdate {
  id: string;
  docType: number;
  formSection: IAddDocRequest;
}

// api types
export interface IRemoveDoc {
  id: number;
  pinCode: number;
}

export interface IUpdateDoc {
  data: any;
  id: number;
}
