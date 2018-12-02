import React from "react";
import T, { arrayOf, shape, string, number } from "prop-types";
import { Product } from "../../components/ProductLink";

export const AdminPage = ({ productList }) => (
  <div>
    {productList.map(({ title, id }) => (
      <Product key={id} id={id} title={title} />
    ))}
  </div>
);

AdminPage.T = {
  productList: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      description: string,
      image: string.isRequired,
      price: string.isRequired
    })
  )
};
