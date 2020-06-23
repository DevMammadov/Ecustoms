import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "store/reducers";
import { checkToken } from "views/login/store/action";
import { ILocalTokenDecoded } from "types";
import { decode } from "jsonwebtoken";

export interface IUserSession {
  fullName: string;
  voen: string;
  isLogin: boolean;
  hasStamp: boolean;
}

export const withUser = (WrappedComponent: FC<any>) => {
  return (props: any) => {
    const userState = useSelector((state: IAppState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      if (userState.asanToken) {
        dispatch(checkToken(userState.asanToken));
      }
    }, [userState.tokenExpired, userState.asanToken, dispatch]);

    const dLocalRoken: ILocalTokenDecoded = userState.localToken
      ? (decode(userState.localToken) as ILocalTokenDecoded)
      : ({} as any);

    console.log("currentUser");

    let currentUser: IUserSession = {
      fullName: dLocalRoken.asa,
      hasStamp: Number(dLocalRoken.hasStamp) === 1,
      voen: dLocalRoken.voen,
      isLogin: !!userState.asanToken && !userState.tokenExpired && !!userState.localToken,
    };

    //@ts-ignore
    return <WrappedComponent currentUser={currentUser} {...props} />;
  };
};
