import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Joke } from "./Joke";

export const App: React.FC = () => (
  <Switch>
    <Route path="/(home|favorite)" exact>
        <Joke />
      </Route>
    {/* <Route path="/" exact component={Joke} /> */}
    {/* <Route path="/favorite" exact component={Favorites} /> */}
    <Route path="*">
      <Redirect to="/home" />
    </Route>
  </Switch>
);
