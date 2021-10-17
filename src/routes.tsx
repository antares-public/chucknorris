import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Jokes } from "./components/Tabs";

export const useRoutes = () => (
  <Switch>
    <Route path="/(home|favorites)" exact>
        <Jokes />
      </Route>
    <Route path="*">
      <Redirect to="/home" />
    </Route>
  </Switch>
);
