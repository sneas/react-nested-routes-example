import React, {Fragment} from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import { routes } from "./routes";
import './App.css';
import {flattenRoutes, setupParents, flattenParents, nestPaths} from "./router-utils";

console.log(nestPaths(routes));

const appRoutes = flattenRoutes(setupParents(nestPaths(routes)));

function RouteMenu({ route }) {
    return (
        <nav className="menu">
            <div>{ route.label }</div>
            { route.children.map((child, index) => (
                <NavLink key={index} to={child.path}>{ child.label }</NavLink>
            )) }
        </nav>
    )
}

function ParentMenu({ route }) {
    return (
        <Fragment>
            { flattenParents(route).reverse().map((parentRoute, index) => (
                <RouteMenu key={index} route={parentRoute} />
            )) }
        </Fragment>
    )
}

function Breadcrumbs({ route }) {
    return (
        <nav className="breadcrumbs">
            <div>Breadcrumbs</div>
            { [...flattenParents(route).reverse(), route].map((breadCrumb, index) => (
                <NavLink key={index} to={breadCrumb.path}>{ breadCrumb.label }</NavLink>
            )) }
        </nav>
    )
}

function Page({ route }) {
    return (
        <Fragment>
            <ParentMenu route={route} />
            { route.children && (
                <RouteMenu route={route} />
            ) }

            { route.parent && (
                <Fragment>
                    <Breadcrumbs route={route} />
                </Fragment>
            )}
            { route.main() }
        </Fragment>
    )
}

function App() {
    return (
        <Router>
            <Switch>
                { appRoutes.reverse().map(route => (
                    <Route key={route.path} path={route.path} render={() => (
                        <Page route={route} />
                    )}>
                    </Route>
                )) }
            </Switch>
        </Router>
    );
}

export default App;