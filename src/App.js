import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./navigation/Page";

const App = ({ routes }) => (
  // We use <BrowserRouter> in order to support
  // routing example hosted on GitHub pages.
  // <BrowserRouter> could be safely replaced with <Router> in
  // your production application.
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.reverse().map((route, index) => (
        <Route key={index} path={route.path}>
          <Page route={route} />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
