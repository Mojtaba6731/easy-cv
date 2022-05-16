import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../../Constants/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Routers() {
  const isUserLogedIn = true;
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((route) => {
          const { publicPage, component } = route;
          return (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {isUserLogedIn ? (
                component
              ) : publicPage ? (
                component
              ) : (
                <Redirect
                  to={{
                    pathname: "/Login",
                  }}
                />
              )}
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
