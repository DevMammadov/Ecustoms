import { routerMiddleware } from "connected-react-router";
import _ from "lodash";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import createReducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const loggerActionColors = {
  success: "green",
  failed: "red",
  started: "blue",
};

const logger = createLogger({
  collapsed: true,
  duration: true,
  colors: {
    // @ts-ignore
    title: (action: any) => loggerActionColors[action.type.split(".")[1]],
  },
});

const devMiddlewares = _.compact([logger]);
export const createHistory = (history: any) => {
  const store = createStore(
    createReducers(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware, ...devMiddlewares))
  );
  sagaMiddleware.run(rootSaga);
  return { store };
};
