import React, { Fragment } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import { flattenParents } from "./navigation-utils";

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
      (crumb, index, breadcrumbs) => (
        <div key={index} className="item">
          {index < breadcrumbs.length - 1 && (
            <NavLink to={crumb.path}>{crumb.label}</NavLink>
          )}
          {index === breadcrumbs.length - 1 && crumb.label}
        </div>
      )
    )}
  </nav>
);

const Page = ({ route }) => {
  const PageBody = route.component;
  return (
    <Fragment>
      <NestedMenu route={route} />
      {route.parent && <Breadcrumbs route={route} />}
      <PageBody />
    </Fragment>
  );
};

const App = ({ routes }) => (
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
