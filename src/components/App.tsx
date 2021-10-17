import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useRoutes } from "../routes";
import { Joke } from "./Joke";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/(home|favorites)" exact>
        <Joke />
      </Route>
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};
