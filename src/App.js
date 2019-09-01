import React, { Fragment } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { navigation } from "./navigation";
import "./App.css";
import { flattenParents, generateAppRoutes } from "./navigation-utils";

const RouteMenu = ({ route }) => (
  <Fragment>
    <div>{route.label}</div>
    <nav className="menu">
      {route.routes.map((child, index) => (
        <NavLink key={index} to={child.path}>
          {child.label}
        </NavLink>
      ))}
    </nav>
  </Fragment>
);

const ParentMenu = ({ route }) => (
  <Fragment>
    {flattenParents(route)
      .reverse()
      .map((parent, index) => (
        <RouteMenu key={index} route={parent} />
      ))}
  </Fragment>
);

const Breadcrumbs = ({ route }) => (
  <Fragment>
    <div>Breadcrumbs</div>
    <nav className="breadcrumbs">
      {[...flattenParents(route).reverse(), route].map((breadCrumb, index) => (
        <div key={index} className="item">
          <NavLink to={breadCrumb.path}>{breadCrumb.label}</NavLink>
        </div>
      ))}
    </nav>
  </Fragment>
);

const Page = ({ route }) => (
  <Fragment>
    <ParentMenu route={route} />
    {route.routes && <RouteMenu route={route} />}

    {route.parent && (
      <Fragment>
        <Breadcrumbs route={route} />
      </Fragment>
    )}
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
