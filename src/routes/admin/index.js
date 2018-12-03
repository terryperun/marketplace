import React from "react";
import { Route } from "react-router-dom";
import T, { arrayOf, shape, string, number } from "prop-types";
import { ProductLink } from "../../components/ProductLink";
import { routes } from "../../routes";
import { ProductContainer } from "../../components/ProductComponent";

export const AdminPage = ({ productList, match, updateProduct }) => (
  <div>
    <Route
      path={match.path}
      exact
      render={() =>
        productList.map(({ title, id }) => (
          <ProductLink key={id} id={id} title={title} />
        ))
      }
    />
    <Route
      path={routes.adminProduct}
      render={renderProps => (
        <ProductContainer
          productList={productList}
          updateProduct={updateProduct}
          {...renderProps}
        />
      )}
    />
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
