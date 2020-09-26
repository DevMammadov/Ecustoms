import React, { FC, useEffect } from "react";
import { Route as ReactRouter, RouteProps } from "react-router-dom";
import { useUser } from "hooks";

export const Route: FC<RouteProps> = (props) => {
  const currentUser = useUser();

  useEffect(() => {
    if (currentUser.asanToken || currentUser.localToken) {
      currentUser.checkLogin();
    }
  }, [currentUser.asanToken, props.path, currentUser.localToken]);

  return <ReactRouter {...props} />;
};
