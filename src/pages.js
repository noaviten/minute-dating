import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./homePage/homePage";

export function Pages() {
  return (
    <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
  </Switch>
  );
}