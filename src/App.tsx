import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import Route from "routes/route";
import { createHistory } from "store";
import "./App.css";

const history = createBrowserHistory();
const { store, persistor } = createHistory(history);

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>loading</div>}>
        <Route />
        <ToastContainer autoClose={4000} />
      </PersistGate>
    </Provider>
  );
};
