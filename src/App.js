import React, { Fragment } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { navigation } from "./navigation";
import "./App.css";
import { flattenParents, generateAppPages } from "./navigation-utils";

const PageMenu = ({ page }) => (
  <Fragment>
    <div>{page.label}</div>
    <nav className="menu">
      {page.children.map((child, index) => (
        <NavLink key={index} to={child.path}>
          {child.label}
        </NavLink>
      ))}
    </nav>
  </Fragment>
);

const ParentMenu = ({ page }) => (
  <Fragment>
    {flattenParents(page)
      .reverse()
      .map((parent, index) => (
        <PageMenu key={index} page={parent} />
      ))}
  </Fragment>
);

const Breadcrumbs = ({ page }) => (
  <Fragment>
    <div>Breadcrumbs</div>
    <nav className="breadcrumbs">
      {[...flattenParents(page).reverse(), page].map((breadCrumb, index) => (
        <div key={index} className="item">
          <NavLink to={breadCrumb.path}>{breadCrumb.label}</NavLink>
        </div>
      ))}
    </nav>
  </Fragment>
);

const Page = ({ page }) => (
  <Fragment>
    <ParentMenu page={page} />
    {page.children && <PageMenu page={page} />}

    {page.parent && (
      <Fragment>
        <Breadcrumbs page={page} />
      </Fragment>
    )}
    {page.main()}
  </Fragment>
);

const pages = generateAppPages(navigation);

const App = () => (
  // We use <BrowserRouter> in order to support
  // routing example hosted on GitHub pages.
  // <BrowserRouter> could be safely replaced with <Router> in
  // your production application.
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {pages.reverse().map((page, index) => (
        <Route
          key={index}
          path={page.path}
          render={() => <Page page={page} />}
        ></Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
