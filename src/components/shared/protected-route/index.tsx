import React, { FC, useEffect } from "react";
import { Route, RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { checkToken } from "views/login/store/action";
import { useHistory } from "react-router";
import { IUserState } from "views/login/store/reducer";

interface IProtectedRoute {
  user: IUserState;
}

const ProtectedRoute: FC<RouteProps & IProtectedRoute> = ({ user, ...rest }) => {
  const history = useHistory();

  useEffect(() => {
    if (user.asanToken) {
      checkToken(user.asanToken);
    }
    if (!user.asanToken || user.tokenExpired || !user.localToken) {
      history.push("/login-required");
    }
  }, [user.asanToken, user.localToken, user.tokenExpired, history]);

  return <Route {...rest} />;
};

const mapStateToProps = (state: IAppState) => ({ user: state.user });

export default connect(mapStateToProps, { checkToken })(ProtectedRoute);
