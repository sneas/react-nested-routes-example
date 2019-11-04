import React from "react";
import { NavLink } from "react-router-dom";
import { flattenParents } from "./utils";

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

export default Breadcrumbs;
