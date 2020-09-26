import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Route from "routes/route";
import { createHistory } from "store";
import "./App.css";

const history = createBrowserHistory();
const { store } = createHistory(history);

export const App = () => {
  return (
    <Provider store={store}>
      <Route history={history} />
      <ToastContainer autoClose={4000} />
    </Provider>
  );
};
