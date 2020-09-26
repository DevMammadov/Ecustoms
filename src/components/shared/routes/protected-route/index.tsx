import React, { FC, useEffect } from "react";
import { Route, RouteProps } from "react-router-dom";
import { AlertPage, Spinner } from "../..";
import { faInfoCircle, faExclamationTriangle } from "@fortawesome/pro-duotone-svg-icons";
import { useTranslator } from "localization";
import { LoginButton } from "components/layout/header/components";
import { useUser } from "hooks";

interface IProtectedRoute {
  voenRequired?: boolean;
  stampRequired?: boolean;
}

export const ProtectedRoute: FC<RouteProps & IProtectedRoute> = ({
  voenRequired = false,
  stampRequired = false,
  ...rest
}) => {
  const lang = useTranslator("alerts");
  const currentUser = useUser();

  useEffect(() => {
    if (currentUser.asanToken || currentUser.localToken) {
      currentUser.checkLogin();
    }
  }, [currentUser.asanToken, currentUser.isLogin, rest.path, currentUser.localToken]);

  const checkVoen = () => {
    if (!currentUser.isLogin) {
      return (
        <AlertPage
          hasButton
          link="/login"
          buttonTitle={lang.login}
          icon={faExclamationTriangle}
          color="warning"
          title={lang.loginRequired}
          renderButtons={<LoginButton />}
        />
      );
    } else if (voenRequired && !currentUser.voen) {
      return <AlertPage icon={faInfoCircle} color="primary" title={lang.voenRequired} />;
    } else if (stampRequired && !currentUser.hasStamp) {
      return <AlertPage icon={faInfoCircle} color="primary" title={lang.stampRequired} />;
    }
    return <Route {...rest} />;
  };

  return checkVoen();
};
