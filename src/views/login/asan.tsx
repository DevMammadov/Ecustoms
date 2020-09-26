import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./store/action";

export interface IAsan {}

export const Asan: FC<IAsan> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return <></>;
};
