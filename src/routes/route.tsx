import { Spinner } from "components/shared";
import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";

const Route = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default Route;
