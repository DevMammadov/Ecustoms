import axios from "axios";

export const asanRequest = axios.create({
  baseURL: "https://apiasanlogintest.my.gov.az/ssoauthz/api/v1/",
  headers: {},
});

export const defaultRequest = axios.create({
  baseURL: "https://tapibusiness.customs.gov.az/api/v1",
  headers: {
    lang: localStorage.getItem("lang") || "az",
  },
});

export const emptyRequest = axios.create();
//https://tapibusiness.customs.gov.az/api/v1
