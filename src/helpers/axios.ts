import axios from "axios";
import { getStorage, setToStorage, emptyStorage } from "./storage";
import { toast } from "react-toastify";
import { push } from "connected-react-router";

export const asanRequest = axios.create({
  baseURL: `${process.env.REACT_APP_ASAN_BASE_URL}/ssoauthz/api/v1/`,
  headers: {},
});

export const emptyRequest = axios.create();

export const nonTokenRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/v1`,
  headers: {
    lang: localStorage.getItem("lang") || "az",
    requestSource: "ECustoms",
  },
});

const defaultRequest = axios.create();

const refreshAccessToken = () => {
  const storage = getStorage();
  const refreshToken = storage?.rt;

  if (refreshToken) {
    return nonTokenRequest
      .post("/user/refresh", { refreshToken })
      .then(({ data }) => data)
      .catch((err) => {
        // if (err.response.status === 401) {
        emptyStorage();
        push("/login");
        // } else {
        //   const status: "info" | "warn" | "error" = err?.response?.data?.exception?.status;
        //   const msg = err.response?.data?.exception?.errorMessage;
        //   toast[status](msg);
        // }
      });
  } else {
    toast.error("Refresh token tapılmadı");
  }
};

defaultRequest.interceptors.request.use(
  (config) => {
    const storage = getStorage();
    const token = storage?.lcl;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      config.baseURL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;
      config.headers["lang"] = localStorage.getItem("lang") || "az";
      config.headers["requestSource"] = "ECustoms";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

defaultRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.response.data.exception.code === "002" && !originalRequest._retry) {
      const payload = await refreshAccessToken();
      originalRequest._retry = true;

      if (payload.data?.token && payload.data?.refreshToken) {
        console.log(payload);
        defaultRequest.defaults.headers.common["Authorization"] = "Bearer " + payload.data.token;
        setToStorage("lcl", payload.data.token);
        setToStorage("rt", payload.data.refreshToken);
      }
      return defaultRequest(originalRequest);
    } else {
      const status: "info" | "warn" | "error" = error?.response?.data?.exception?.status;
      const msg = error.response?.data?.exception?.errorMessage;
      console.log(error);
      if (typeof msg === "object") {
        toast[status](msg[Object.keys(msg)[0]]);
      } else {
        toast[status](msg);
      }
    }
    //return Promise.reject(error);
  }
);

export { defaultRequest };
