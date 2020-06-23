import { IConfirmPayload, IToggleActivityPayload } from "views/myInfo/types";
import { defaultRequest } from "helpers";

export default class MyInfoApi {
  static getInfo = () => {
    return defaultRequest.get(`/user`).then(({ data }) => data);
  };

  static updateInfo = (payload: any) => {
    return defaultRequest.put(`/user`, payload).then(({ data }) => data);
  };

  static getBankInfo = () => {
    return defaultRequest.get(`/user/banks`).then(({ data }) => data);
  };

  static updateBankInfo = () => {
    return defaultRequest.put(`/user/banks`).then(({ data }) => data);
  };

  static getCustomsWarehouses = (filter: number) => {
    let status = filter === 3 ? 0 : filter;
    return defaultRequest.get(`/user/warehouse/${status}`).then(({ data }) => data);
  };

  static getUserContacts = () => {
    return defaultRequest.get(`/user/contacts`).then(({ data }) => data);
  };

  static sendNumber = (data: string) => {
    let formData = new FormData();
    formData.append("phone", data);
    return defaultRequest.post(`/user/sms/`, formData).then(({ data }) => data);
  };

  static sendNumberCode = (data: IConfirmPayload) => {
    return defaultRequest.post(`/user/sms-confirmation/`, data).then(({ data }) => data);
  };

  static removeNumber = (orderNumber: string) => {
    return defaultRequest.delete(`/user/phone/${orderNumber}`).then(({ data }) => data);
  };

  static sendEmail = (data: string) => {
    let formData = new FormData();
    formData.append("email", data);
    return defaultRequest.post("/user/email", formData).then(({ data }) => data);
  };

  static sendEmailCode = (data: IConfirmPayload) => {
    return defaultRequest.post(`/user/email-confirmation/`, data).then(({ data }) => data);
  };

  static removeEmail = (orderNumber: string) => {
    return defaultRequest.delete(`/user/email/${orderNumber}`).then(({ data }) => data);
  };

  static toggleEmailActivity = (data: IToggleActivityPayload) => {
    return defaultRequest.put(`/user/email/activity`, data).then(({ data }) => data);
  };

  static toggleNumberActivity = (data: IToggleActivityPayload) => {
    return defaultRequest.put(`/user/phone/activity`, data).then(({ data }) => data);
  };
}
