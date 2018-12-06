import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';
// import { ProductLink } from "../../components/ProductLink";
import { routes } from '../../routes';
// import { ProductContainer } from '../../components/Product/ProductContainer';
import ProductPageContainer from './ProductPage/ProductPageContainer';
import ProductList from './ProductList/ProductListContainer';

export const AdminPage = ({ productList, match, updateProduct }) => (
  <div>
    <Switch>
      <Route path={match.path} exact component={ProductList} />
      <Route
        path={routes.adminProduct}
        render={(renderProps) => (
          <ProductPageContainer
            productList={productList}
            updateProduct={updateProduct}
            {...renderProps}
          />
        )}
      />
    </Switch>
  </div>
);

AdminPage.T = {
  productList: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      description: string,
      image: string.isRequired,
      price: string.isRequired,
    }),
  ),
};
