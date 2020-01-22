import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./homePage/homePage";
import { LoginPage } from "./loginPage/loginPage";
import { ProfilePage } from "./profilePage/profilePage";
import { FakeUserPage } from "./fakeUserPage/fakeUserPage";

export function Pages() {
  return (
    <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/myProfile">
      <ProfilePage />
    </Route>
    <Route path="/userProfile">
      <FakeUserPage />
    </Route>
  </Switch>
  );
}