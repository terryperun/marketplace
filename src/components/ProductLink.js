import React from "react";
// import { productPropTypes } from "../common/propTypes";
import T from "prop-types";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { formatRoute } from "react-router-named-routes";

export const Product = ({ id, title }) => (
  <div>
    <Link to={formatRoute(routes.adminProduct, { id })}>{title}</Link>
  </div>
);

Product.T = {
  id: T.number.isRequired,
  title: T.string.isRequired
};
