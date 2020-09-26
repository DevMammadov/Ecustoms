import { IXifDocsState } from "./store/reducer";

export interface IXifDocsPage {
  getXifDocs(): void;
  getXifDocTypes(): void;
  xifDocState: IXifDocsState;

  searchXifDoc(form: IFilterForm): void;
  getFile(id: number): void;
  removeDoc(data: IRemoveDoc): void;
  toggleFilter(filter: IXifFilter): void;
}

export interface IXifDocListPage {
  xifDocs: IXifDoc[];
  onFileOpen(idn: number): void;
  onRemove(data: IRemoveDoc): void;
}
export interface ISearchResponse {
  startDate: string;
  endDate: string;
  docType: number;
}

export interface IAddXifDocPage {
  xifDocState: IXifDocsState;
  getXifDocTypes(): void;
  getCompanyInfo(): void;
  getCurrency(): void;
  getDoc(id: number): void;
  getFile(id: number): void;
  clearDoc(): void;
  sendXifDocs(data: any): void;
  updateDoc(data: IUpdateDoc): void;
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
  contractNo: string;
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
  receiverVoen: string;
  receiverName: string;
  senderVoen: string;
  senderName: string;
  note: string;
  doc: any;
}

export interface IDocToUpdate {
  id: string;
  pinCode: string;
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
  pinCode: string;
}

export interface IFilterForm {
  startDate: string;
  endDate: string;
  docType: number;
  pinCode: number;
  contractNo: string;
}

export interface IXifFilter {
  isFiltered: boolean;
  form: IFilterForm;
}
