import { decode } from "jsonwebtoken";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "store/reducers";
import { ILocalTokenDecoded, ISertificate } from "types";
import { checkToken } from "views/login/store/action";
import { getStorage, emptyStorage } from "helpers/storage";
import { useHistory } from "react-router";

export interface ICurrentUser {
  name: string;
  surname: string;
  fatherName: string;
  voen: string;
  isLogin: boolean;
  hasStamp: boolean;
  loginType: string;
  birthDate: string;
  citizenship: string;
  localToken: string;
  lang: string;
  pageLoading: boolean;
  sertificates: ISertificate[];
  selectedSertificate: ISertificate | null;
  asanToken: string;
  pin: string;
  checkLogin(): void;
  logout(): void;
}

export const useUser = () => {
  const storage = getStorage();
  const history = useHistory();

  const userState = useSelector((state: IAppState) => state.user);
  const currentLang = useSelector((state: IAppState) => state.header.lang) || localStorage.getItem("lang") || "az";
  const asanToken = storage?.asa || "";
  const localToken = storage?.lcl || "";
  const dispatch = useDispatch();

  const localTokenDecoded = () => {
    return localToken ? (decode(localToken) as ILocalTokenDecoded) : ({} as any);
  };

  const asanTokenDecoded = () => {
    return asanToken ? (decode(asanToken) as any) : ({} as any);
  };

  let currentUser: ICurrentUser = {
    name: localTokenDecoded().person?.name,
    surname: localTokenDecoded().person?.surname,
    fatherName: localTokenDecoded().person?.fatherName,
    birthDate: localTokenDecoded().person?.birthDate,
    hasStamp: localTokenDecoded().person?.hasStamp,
    voen: localTokenDecoded().person?.voen,
    isLogin: !!asanToken && !userState.tokenExpired && !!localToken,
    loginType: asanTokenDecoded().main?.loginType,
    citizenship: localTokenDecoded().person?.citizenship,
    sertificates: storage?.serts || [],
    selectedSertificate: storage?.selectedSert || null,
    lang: currentLang,
    pageLoading: userState.pageLoading,
    pin: localTokenDecoded().person?.pin,
    localToken,
    asanToken,
    checkLogin: () => {
      dispatch(checkToken(asanToken));
    },
    logout: () => {
      emptyStorage();
      history.push("/login");
    },
  };

  return currentUser;
};
