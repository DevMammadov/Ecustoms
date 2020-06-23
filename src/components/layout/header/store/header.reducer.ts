import { handleActions } from "redux-actions";
import { changeLang, setTheme } from "./header.actions";

export interface IHeaderStore {
  lang: string;
  theme: string;
}

const initialState: IHeaderStore = {
  lang: "az",
  theme: "lightTheme",
};

export default handleActions(
  {
    [changeLang]: (state, action) => ({
      ...state,
      lang: action.payload as any,
    }),
    [setTheme]: (state, action) => ({
      ...state,
      theme: action.payload as any,
    }),
  },
  initialState
);
