import React from "react";
import { NavLink } from "react-router-dom";
import { flattenParents } from "./utils";

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
  <>
    {[...flattenParents(route).reverse(), route]
      .filter(r => r.routes)
      .map((r, index) => (
        <Menu key={index} routes={r.routes} />
      ))}
  </>
);

export default NestedMenu;
