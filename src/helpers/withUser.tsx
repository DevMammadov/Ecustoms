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
    // let currentUser: IUserSession = {
    //   fullName: dLocalRoken.asa,
    //   hasStamp: Number(dLocalRoken.hasStamp) === 1,
    //   voen: dLocalRoken.voen,
    //   isLogin: !!userState.asanToken && !userState.tokenExpired && !!userState.localToken,
    // };
    let currentUser = null;

    //@ts-ignore
    return <WrappedComponent currentUser={currentUser} {...props} />;
  };
};
