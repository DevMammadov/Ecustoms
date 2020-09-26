import { defaultRequest } from "helpers";

export default class DeclaratioInfoApi {
  static egb = (data: any) => {
    return defaultRequest
      .get(`/egb`, {
        params: { voen: data.voen, regNumber: data.requestNumber },
      })
      .then(({ data }) => data);
  };

  // static getEgbFile = (data: any) => {
  //   return defaultRequest.get(`/egb/file`, { params: { declarationId: data.id } }).then(({ data }) => data);
  // };

  static getEgbFile = (declarationId: number) => {
    return defaultRequest.get(`/egb/file/${declarationId}`).then(({ data }) => data);
  };
}
