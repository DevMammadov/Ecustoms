export interface IDeclarationFilter {
  limit: number;
  offset: number;
  isFiltered?: boolean;
  form: IDeclarationFilterForm;
}

export interface IDeclarationFilterForm {
  dateFrom?: string;
  dateTo?: string;
  docNo: string;
  nationality: string;
}

export interface IGoodGroup {
  id: number;
  name: string;
  rate: number;
  hsCode?: any;
}

// requests
export interface IGood {
  goodsGroupId?: number;
  goodsId: number;
  invoicePrice: number;
  currencyType: string;
  quantity: number;
  quantityUnit: string;
  rate: number;
}

export interface IGoodRequest {
  receiverFullName: string;
  totalInvoicePrice: number;
  goodsInvoicePriceList: IGood[] | IGoodsInvoicePriceList[];
}

// responses
export interface IDuty {
  code: string;
  name: string;
  value: number;
  type?: number;
}

export interface IGoodsInvoicePriceList {
  goodsGroupId?: number;
  goodsId: number;
  invoicePriceAzn?: number;
  invoicePriceUsd?: number;
  currencyType: string;
  currencyName?: string;
  quantity: number;
  invoicePrice: number;
  quantityUnit: string;
  quantityUnitName?: string;
  rate: number;
  goodsName?: string;
  goodsGroupName?: string;
  exceedPriceUsd?: number;
  exceedPriceAzn?: number;
  dutyList?: IDuty[];
}

export interface IGoodTotalPrice {
  invoicePriceAzn: number;
  invoicePriceUsd: number;
  limitAzn: number;
  limitUsd: number;
  dutySumAzn: number;
  duty: IDuty[];
}

export interface ITotalPrice {
  invoicePriceAzn: number;
  invoicePriceUsd: number;
  remainderPriceAzn: number;
  remainderPriceUsd: number;
  limitAzn: number;
  limitUsd: number;
  dutySumAzn: number;
  duty: IDuty[];
}

export interface IExceed {
  exParams: any;
  message: string;
  status: boolean;
}

export interface IGoodResponse {
  totalPrices: IGoodTotalPrice;
  exceed: IExceed;
}

export interface ICompany {
  id: number;
  voen: string;
  name: string;
  shortName: string;
  siteName?: string;
  wwName?: string;
}

export interface IDeclaration {
  mainId: number;
  declarationDate: string;
  declarationNumber: string;
  carrierCompany: string;
  sender: string;
  invoicePriceAzn: string;
  invoicePriceUsd: string;
  dutyAzn: string;
  exceedLimit: number;
  paymentStatus: number;
  received: number;
  trackingId: string;
}

export interface IDeclarationList {
  count: number;
  declarations: IDEclaration[];
}

export interface IDelarationListPayload {
  docNo: string;
  nationality: string;
  offset: number;
  limit: number;
}

// total Object
export interface IReceiver {
  name: string;
  surname: string;
  fatherName: string;
  nationality: string;
  nationalityName?: string;
  docNo: string;
  birthDate: string;
  phoneNumber: string;
}

export interface ISender {
  carrierCompany: string;
  country: string;
  name: string;
  trackingId: string;
  companyName?: string;
  countryName?: string;
}

export interface ITotalObject {
  receiver: IReceiver;
  sender: ISender;
  goodsList: IGood[];
}

// declaration info (look button)
export interface IDecShortInfo {
  mainId: number;
  declarationDate: string;
  declarationNumber: string;
  carrierCompany: string;
  trackingId?: any;
  sender: string;
  invoicePriceAzn: string;
  invoicePriceUsd: string;
  dutyAzn: string;
  exceedLimit: number;
  paymentStatus: number;
  received: number;
}

export interface IDeclarationInfo {
  declarationInfo: IDecShortInfo;
  goodsInvoicePrice: { goodsInvoicePriceList: IGoodsInvoicePriceList[]; totalPrices: ITotalPrice };
  receiver: IReceiver;
  sender: ISender;
  exceed: IExceed;
}
