import React, { Fragment } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { navigation } from "./navigation";
import "./App.css";
import { flattenParents, generateAppRoutes } from "./navigation-utils";

const Menu = ({ routes }) => (
  <nav className="menu">
    {routes.map((route, index) => (
      <NavLink key={index} to={route.path}>
        {route.label}
      </NavLink>
    ))}
  </nav>
);

const NestedMenu = ({ route }) => (
  <Fragment>
    {[...flattenParents(route).reverse(), route]
      .filter(r => r.routes)
      .map((r, index) => (
        <Menu key={index} routes={r.routes} />
      ))}
  </Fragment>
);

const Breadcrumbs = ({ route }) => (
  <nav className="breadcrumbs">
    {[...flattenParents(route).reverse(), route].map(
      (breadCrumb, index, breadcrumbs) => (
        <div key={index} className="item">
          {index < breadcrumbs.length - 1 && (
            <NavLink to={breadCrumb.path}>{breadCrumb.label}</NavLink>
          )}
          {index === breadcrumbs.length - 1 && breadCrumb.label}
        </div>
      )
    )}
  </nav>
);

const Page = ({ route }) => (
  <Fragment>
    <NestedMenu route={route} />
    {route.parent && <Breadcrumbs route={route} />}
    {route.main()}
  </Fragment>
);

const routes = generateAppRoutes(navigation);

const App = () => (
  // We use <BrowserRouter> in order to support
  // routing example hosted on GitHub pages.
  // <BrowserRouter> could be safely replaced with <Router> in
  // your production application.
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.reverse().map((route, index) => (
        <Route
          key={index}
          path={route.path}
          render={() => <Page route={route} />}
        ></Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
