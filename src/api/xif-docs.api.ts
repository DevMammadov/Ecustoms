import { defaultRequest } from 'helpers';
import { IRemoveDoc, IUpdateDoc } from 'views/xif-docs/types';

export default class XifDocsApi {
  static getXifDocs = () => {
    return defaultRequest.get(`/xif-docs`).then(({ data }) => data);
  };

  static getDoc = (id: number) => {
    return defaultRequest.get(`/xif-docs/${id}`).then(({ data }) => data);
  };

  static getXifDocTypes = () => {
    return defaultRequest.get(`/xif-docs/types`).then(({ data }) => data);
  };

  static searchXifDoc = (data: any) => {
    return defaultRequest.post(`/xif-docs/search`, data).then(({ data }) => data);
  };

  static getCompanyInfo = () => {
    return defaultRequest.get(`/xif-docs/company`).then(({ data }) => data);
  };

  static getCurrency = () => {
    return defaultRequest.get(`/xif-docs/currency`).then(({ data }) => data);
  };

  static sendXifDocs = (data: any) => {
    return defaultRequest
      .post(`/xif-docs`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => data);
  };

  static getFile = (idn: number) => {
    return defaultRequest.get(`/xif-docs/file/${idn}`, { responseType: 'blob' }).then(({ data }) => data);
  };

  static removeDoc = ({ id, pinCode }: IRemoveDoc) => {
    return defaultRequest.delete(`/xif-docs/`, { params: { id, pinCode } }).then(({ data }) => data);
  };

  static updateDoc = (payload: IUpdateDoc) => {
    return defaultRequest
      .put(`/xif-docs/${payload.id}/${payload.pinCode}`, payload.data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => data);
  };
}
