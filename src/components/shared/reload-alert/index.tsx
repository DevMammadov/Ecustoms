import React, { FC, useEffect, useState } from "react";

export interface IReloadAlert {}

export const ReloadAlert: FC<IReloadAlert> = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
      e.returnValue = "hehehehe";
      console.log(e.currentTarget);
    });

    return () => {
      window.removeEventListener("beforeunload", () => {});
    };
  }, []);

  return <></>;
};
