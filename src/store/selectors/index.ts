import { get } from "lodash-es";
import { IAppState } from "../reducers";

export const getUserLocalToken = (state: IAppState) => {
  return get(state, "user.localToken", false);
};
