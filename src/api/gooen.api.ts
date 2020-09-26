import { nonTokenRequest } from 'helpers';

export default class GooenApi {
  static getCountries = () => {
    return nonTokenRequest.get(`/dictionaries/countries`).then(({ data }) => data);
  };

  static handleStepOne = (data: any) => {
    return nonTokenRequest.post(`/gooen/step-one`, data).then(({ data }) => data);
  };

  static handleStepTwo = (data: any) => {
    return nonTokenRequest.post(`/gooen`, data).then(({ data }) => data);
  };

  static getGooenInfo = (data: any) => {
    return nonTokenRequest.get('/gooen', { params: data }).then(({ data }) => data);
  };

  static updateGooen = (data: any) => {
    const pin = data.passport;
    return nonTokenRequest.put(`/gooen/${pin}/${data.country}`).then(({ data }) => ({ pin: pin, data: data }));
  };
}
