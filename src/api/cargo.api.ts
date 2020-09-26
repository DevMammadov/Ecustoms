import { defaultRequest } from "helpers";
import { IPostalFilterResponse } from "views/postal-services/types";

export default class Cargo {
  static getCargo = ({ offset, limit, filter }: IPostalFilterResponse) => {
    return defaultRequest.post(`/cargo/${offset}/${limit}`, filter).then(({ data }) => data);
  };

  static getSubData = async (IDXAL_VOEN: string) => {
    const { data } = await defaultRequest.get(`/cargo/importVoen/${IDXAL_VOEN}`);
    return { idxaL_VOEN: IDXAL_VOEN, data: data.data };
  };

  static checkVoen = (data: any) => {
    return defaultRequest.get(`/cargo/check-voen`, { params: { voen: data } }).then(({ data }) => data);
  };

  static sendFile = (data: any) => {
    return defaultRequest.post(`/cargo`, data).then(({ data }) => data);
  };
}
