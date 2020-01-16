import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./homePage/homePage";
import { LoginPage } from "./loginPage/loginPage";

export function Pages() {
  return (
    <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
  </Switch>
  );
}