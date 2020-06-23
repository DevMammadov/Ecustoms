import { decode } from "jsonwebtoken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "store/reducers";
import { ILocalTokenDecoded } from "types";
import { checkToken } from "views/login/store/action";

export interface ICurrentUser {
  fullName: string;
  voen: string;
  isLogin: boolean;
  hasStamp: boolean;
  loginType: string;
  localToken: string;
  lang: string;
  pageLoading: boolean;
}

export const useUser = (check?: boolean) => {
  const userState = useSelector((state: IAppState) => state.user);
  const currentLang = useSelector((state: IAppState) => state.header.lang);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState.asanToken) {
      dispatch(checkToken(userState.asanToken));
    }
  }, [userState.localToken, dispatch, userState.asanToken]);

  const localToken = () => {
    return userState.localToken ? (decode(userState.localToken) as ILocalTokenDecoded) : ({} as any);
  };

  const asanToken = () => {
    return userState.asanToken ? (decode(userState.asanToken) as any) : ({} as any);
  };

  let currentUser: ICurrentUser = {
    fullName: localToken().asa,
    hasStamp: Number(localToken().hasStamp) === 1,
    voen: localToken().voen,
    isLogin: !!userState.asanToken && !userState.tokenExpired && !!userState.localToken,
    loginType: asanToken().main?.loginType,
    localToken: userState.localToken,
    lang: currentLang,
    pageLoading: userState.pageLoading,
  };

  return currentUser;
};
