import { IDeclarationState } from "./store/reducer";

export interface IDeclarationPage {
  setStep(stepNum: number): void;
  declaration: IDeclarationState;
}

export interface ICountry {}

export interface IAnswer {
  questionCode: number;
  answer: string;
  count?: number;
}

export interface IDocument {
  licenseOrganization: string;
  licenseNumber: string;
  licenseDate: string;
}

export interface IGood {
  goodsName: string;
  invoicePrice: number;
  quantity: number;
  quantityUnit: number;
  temporaryStatus: number;
  datetemporary: string;
  category: number;
  isDuty: number;
  isCarrier: number;
  documents: Document[];
}

export interface ICurrency {
  currencyCode: string;
  quantity: number;
}

export interface ICoffin {
  name: string;
  surName: string;
  patronymic: string;
  birthDate: string;
  note: string;
}

export interface IDeclaration {
  documentNumber: string;
  name: string;
  surName: string;
  patronymic: string;
  citizenship: string;
  birthDate: Date;
  phoneNumber: string;
  residenceCountry: string;
  regime: 1 | 2 | 3;
  countryFrom: string;
  countryTo: string;
  isCarrier: number;
  answers: IAnswer[];
  goods: IGood[];
  currencies: ICurrency[];
  coffins: ICoffin[];
}

export interface ICurrency {
  id: number;
  code?: any;
  name: string;
  abbreviation2?: any;
  abbreviation3?: any;
}

// -------- Payloads
export interface IPersonalInfoPayload {
  nationality: string;
  documentNumber: string;
  birthDate: string;
}
