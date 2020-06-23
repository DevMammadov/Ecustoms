import { defaultRequest } from "helpers";
import { IActivity, IPermissionPayload } from "views/giving-permissions/types";

export default class GivingPermissions {
  static getWorkers = () => {
    return defaultRequest.get(`/permission/given`).then(({ data }) => data);
  };

  static getWorkerSert = (pin: string) => {
    return defaultRequest.get(`/permission/search/${pin}`).then(({ data }) => data);
  };

  static getPermissions = ({ pin, signature }: IPermissionPayload) => {
    console.log(signature);
    return defaultRequest.get(`/permission/${pin}/${signature}`).then(({ data }) => data);
  };

  static updateWorkerActivity = (data: IActivity) => {
    return defaultRequest.put(`/permission/status`, data).then(({ data }) => data);
  };

  static removeWorkerPermissions = ({ pin, signature }: IPermissionPayload) => {
    return defaultRequest.delete(`/permission/delete/${pin}/${signature}`).then(({ data }) => data);
  };

  static updatePermissions = (data: any) => {
    return defaultRequest
      .put(`/permission/edit`, data.model, {
        headers: data.headers,
      })
      .then(({ data }) => data);
  };
}
