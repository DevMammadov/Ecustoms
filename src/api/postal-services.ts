import { defaultRequest } from 'helpers';
import { IPostalFilterResponse } from 'views/postal-services/types';

export default class PostalServices {
  static sendGood = (data: any) => {
    return defaultRequest.post(`/postal`, data).then(({ data }) => data);
  };

  static getSubData = (fin: string) => {
    return defaultRequest.get(`/postal/fin/${fin}`).then(({ data }) => ({ fin: fin, data: data.data }));
  };

  static removePostal = ({ id, fin }: { id: number; fin: string }) => {
    return defaultRequest.delete(`/postal/${id}`).then(({ data }) => fin);
  };

  static getPostal = ({ filter, limit, offset }: IPostalFilterResponse) => {
    return defaultRequest.post(`/postal/${offset}/${limit}`, filter).then(({ data }) => data);
  };
}
