import { handleActions } from "redux-actions";
import { getUserAsync, getCertificatesAsync, sendTokenAsync, checkTokenAsync, setSertificate } from "./action";
import { ISertificate } from "types";

export interface IUserState {
  name: string;
  fin: string;
  asanToken: string;
  localToken: string;
  refreshToken: string;
  sertificates: ISertificate[];
  tokenExpired: boolean;
  selectedSertificate: ISertificate | null;
  pageLoading: boolean;
}

const initialState: IUserState = {
  asanToken: "",
  fin: "",
  localToken: "",
  name: "",
  refreshToken: "",
  sertificates: [],
  selectedSertificate: null,
  tokenExpired: true,
  pageLoading: false,
};

export default handleActions(
  {
    [getUserAsync.success]: (state, action: any) => ({
      ...state,
      asanToken: action.payload.data.data.token as any,
    }),
    [getCertificatesAsync.success]: (state, action: any) => ({
      ...state,
      sertificates: action.payload.data.data.availableCertificates as any,
    }),
    [sendTokenAsync.started]: (state) => ({ ...state, pageLoading: true }),
    [sendTokenAsync.failed]: (state) => ({ ...state, pageLoading: false }),
    [sendTokenAsync.success]: (state, action: any) => ({
      ...state,
      localToken: action.payload.data.data.token as any,
      pageLoading: false,
    }),
    [checkTokenAsync.started]: (state) => ({ ...state, pageLoading: true }),
    [checkTokenAsync.failed]: (state, action: any) => {
      let tokenExpired = action.payload.response?.status === 401 ? true : false;
      return {
        ...state,
        tokenExpired: tokenExpired,
        selectedSertificate: tokenExpired ? null : state.selectedSertificate,
        asanToken: tokenExpired ? "" : state.asanToken,
        sertificates: tokenExpired ? [] : state.sertificates,
        localToken: tokenExpired ? "" : state.localToken,
        pageLoading: false,
      };
    },
    [checkTokenAsync.success]: (state, action: any) => ({
      ...state,
      tokenExpired: !action.payload,
      localToken: !action.payload ? "" : state.localToken,
      asanToken: !action.payload ? "" : state.asanToken,
      selectedSertificate: !action.payload ? null : state.selectedSertificate,
      pageLoading: false,
    }),
    [setSertificate]: (state, action: any) => {
      return {
        ...state,
        selectedSertificate: state.sertificates.filter((s: ISertificate) => s.certificateNumber === action.payload)[0],
      } as any;
    },
  },
  initialState
);
