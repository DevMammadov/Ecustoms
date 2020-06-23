import { asanRequest, defaultRequest, emptyRequest } from "helpers";
import { ISendToken } from "types";

export default class UserApi {
  static getUser = () => {
    return emptyRequest.get("https://asanlogintest.my.gov.az/ssoauthz/api/v1/token", {
      withCredentials: true,
    });
  };

  static getCertificates = (token: string) => {
    return asanRequest.get("token/certs", {
      headers: {
        Authorization: token,
      },
    });
  };

  static sendToken = (payload: ISendToken) => {
    return defaultRequest.get("/user/login", {
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
