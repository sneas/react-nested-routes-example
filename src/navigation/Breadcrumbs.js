import React from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";

const Breadcrumbs = ({ route }) => (
  <nav className="breadcrumbs">
    {pathTo(route).map((crumb, index, breadcrumbs) => (
      <div key={index} className="item">
        {index < breadcrumbs.length - 1 && (
          <NavLink to={crumb.path}>{crumb.label}</NavLink>
        )}
        {index === breadcrumbs.length - 1 && crumb.label}
      </div>
    ))}
  </nav>
);

export default Breadcrumbs;
