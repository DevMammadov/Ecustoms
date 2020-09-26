import { nonTokenRequest } from "helpers";
import { IPersonalInfoPayload } from "views/declaration/types";

export default class DeclarationApi {
  static getDecs = (data: string[]) => {
    return nonTokenRequest
      .post(`/dictionaries/list`, {
        dictionaryType: data,
      })
      .then(({ data }) => data);
  };

  static checkPersonalInfo = (data: IPersonalInfoPayload) => {
    return nonTokenRequest.post(`/pasdeclar/personinfo`, data).then(({ data }) => data);
  };
}
