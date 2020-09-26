import { Spinner } from "components/shared";
import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";

const Route = ({ history }: any) => {
  return (
    <Router history={history}>
      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default Route;
