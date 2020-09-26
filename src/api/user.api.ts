import { asanRequest, defaultRequest, emptyRequest, nonTokenRequest } from "helpers";
import { ISendToken } from "types";

export default class UserApi {
  static getUser = () => {
    return emptyRequest.get(`${process.env.REACT_APP_ASAN_BASE_URL}/ssoauthz/api/v1/token`, {
      withCredentials: true,
    });
  };

  static getPhoto = () => {
    return defaultRequest.get("user/photo").then(({ data }) => data);
  };

  static getCertificates = (token: string) => {
    return asanRequest.get("token/certs", {
      headers: {
        Authorization: token,
      },
    });
  };

  static sendToken = (payload: ISendToken) => {
    return nonTokenRequest.get("/user/login", {
      headers: {
        asanToken: payload.token,
        selectedVoen: payload.voen,
        withCredentials: true,
      },
    });
  };

  static checkToken = (token: string) => {
    return asanRequest.get("token/check", {
      headers: {
        Authorization: token,
      },
    });
  };
}
