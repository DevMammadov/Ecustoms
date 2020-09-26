import { defaultRequest } from "helpers";
import { INotifyFilterResponse, ISearchResponse } from "views/notifications/types";

export default class NotifyApi {
  static getLastNotify = () => {
    return defaultRequest.get(`/notification/last`).then(({ data }) => data);
  };

  static getNotify = ({ filter, limit, offset, gridFilter }: INotifyFilterResponse) => {
    return defaultRequest.post(`/notification/${gridFilter}/${offset}/${limit}`, filter).then(({ data }) => data);
  };

  static getFilters = () => {
    return defaultRequest.get(`/notification/type`).then(({ data }) => data);
  };

  static sendForm = (data: ISearchResponse) => {
    return defaultRequest.get(`/notification/search`, { params: data }).then(({ data }) => data);
  };
}
