import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Joke } from "./components/Joke";

export const useRoutes: React.FC = () => (
  <Switch>
    <Route path="/(home|favorites)" exact>
        <Joke />
      </Route>
    <Route path="*">
      <Redirect to="/home" />
    </Route>
  </Switch>
);
