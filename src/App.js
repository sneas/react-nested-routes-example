import React, { Fragment } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import {
  flattenRoutes,
  setupParents,
  flattenParents,
  nestPaths
} from "./router-utils";

const RouteMenu = ({ route }) => (
  <nav className="menu">
    <div>{route.label}</div>
    {route.children.map((child, index) => (
      <NavLink key={index} to={child.path}>
        {child.label}
      </NavLink>
    ))}
  </nav>
);

const ParentMenu = ({ route }) => (
  <Fragment>
    {flattenParents(route)
      .reverse()
      .map((parentRoute, index) => (
        <RouteMenu key={index} route={parentRoute} />
      ))}
  </Fragment>
);

const Breadcrumbs = ({ route }) => (
  <nav className="breadcrumbs">
    <div>Breadcrumbs</div>
    {[...flattenParents(route).reverse(), route].map((breadCrumb, index) => (
      <NavLink key={index} to={breadCrumb.path}>
        {breadCrumb.label}
      </NavLink>
    ))}
  </nav>
);

const Page = ({ route }) => (
  <Fragment>
    <ParentMenu route={route} />
    {route.children && <RouteMenu route={route} />}

    {route.parent && (
      <Fragment>
        <Breadcrumbs route={route} />
      </Fragment>
    )}
    {route.main()}
  </Fragment>
);

const appRoutes = flattenRoutes(setupParents(nestPaths(routes)));

const App = () => (
  // We use <BrowserRouter> in order to support
  // routing example hosted on GitHub pages.
  // <BrowserRouter> could be safely replaced with <Router> in
  // your production application.
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {appRoutes.reverse().map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={() => <Page route={route} />}
        ></Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
