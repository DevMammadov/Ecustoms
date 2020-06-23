import React, { FC, useEffect } from "react";
import { IAppState } from "store/reducers";
import { userActions } from "../store/action";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { IUserState } from "../store/reducer";
import { decode } from "jsonwebtoken";
import { ISendToken } from "types";
import { Spinner } from "components/shared";

interface ILogin {
  getUser(): void;
  getCertificaes(token: string): void;
  sendToken(payload: ISendToken): void;
  checkToken(token: string): void;
  user: IUserState;
}

const Asan: FC<ILogin> = ({ getCertificaes, getUser, user, checkToken, sendToken }) => {
  const history = useHistory();

  useEffect(() => {
    if (user.localToken) {
      history.push("/");
    }

    if (user.sertificates.length > 0) {
      history.push("/login");
    }

    if (user.asanToken) {
      let asanToken: any = decode(user.asanToken);
      if (asanToken.main.loginType === "loginWithPassword") {
        if (!user.pageLoading) {
          sendToken({ token: user.asanToken, voen: "" });
        }
      } else {
        getCertificaes(user.asanToken);
      }
    } else {
      getUser();
    }
  }, [
    getUser,
    user.asanToken,
    user.tokenExpired,
    getCertificaes,
    checkToken,
    history,
    sendToken,
    user.localToken,
    user.sertificates.length,
    user.pageLoading,
  ]);

  return <Spinner color="primary" />;
};

const mapStateToProps = (state: IAppState) => ({ user: state.user });
export default connect(mapStateToProps, userActions)(Asan);
