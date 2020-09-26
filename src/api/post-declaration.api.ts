import { nonTokenRequest, defaultRequest } from "helpers";
import { ITotalObject, IGoodRequest, IDelarationListPayload, IDeclarationFilter } from "views/post-declaration/types";
import { IGetDeclarationInfoRequest } from "views/post-declaration/components/dec-info";

export default class PostDeclarationApi {
  static getDecs = (data: string[]) => {
    return nonTokenRequest
      .post(`/dictionaries/list`, {
        dictionaryType: data,
      })
      .then(({ data }) => data);
  };

  static getGoodsGroup = (id?: any) => {
    const params = typeof id === "number" ? { params: { parentGroup: id } } : undefined;
    return nonTokenRequest.get(`/dictionaries/sbGoodsGroups`, params).then(({ data }) => ({ data, id }));
  };

  static getCompanies = () => {
    return nonTokenRequest.get(`/dictionaries/carrierCompanies`).then(({ data }) => data);
  };

  static getDeclarations = (data: IDelarationListPayload) => {
    const { docNo, limit, nationality, offset } = data;
    return defaultRequest
      .get(`/ecommercedeclar/declarations/${offset}/${limit}`, { params: { docNo, nationality } })
      .then(({ data }) => data);
  };

  static searchDeclaration = ({ limit, offset, form }: IDeclarationFilter) => {
    return defaultRequest
      .get(`/ecommercedeclar/declarationsByDate/${offset}/${limit}`, { params: form })
      .then(({ data }) => data);
  };

  static getDeclarationInfo = ({ declarationNo, docNo, nationality }: IGetDeclarationInfoRequest) => {
    return defaultRequest
      .get(`/ecommercedeclar/declarationInfo/${declarationNo}`, { params: { docNo, nationality } })
      .then(({ data }) => data);
  };

  static getTotalPrice = (data: any) => {
    return defaultRequest.get(`/ecommercedeclar/totalPrices/`, { params: data }).then(({ data }) => data);
  };

  static addDeclaration = (data: any) => {
    return defaultRequest.post(`/ecommercedeclar/addDeclaration/`, data).then(({ data }) => data);
  };

  static calculateGood = (data: IGoodRequest) => {
    if (data.goodsInvoicePriceList.length !== 0) {
      return defaultRequest.post(`/ecommercedeclar/getgoodsinvoiceprice`, data).then(({ data }) => data);
    } else {
      return {
        data: {
          totalPrices: {},
          exceed: {},
        },
      };
    }
  };
}
