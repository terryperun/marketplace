import React, { Component } from 'react';
// import T from "prop-types";
// import styled from "styled-components";
import { arrayOf } from 'prop-types';
// import { ProductComponent } from './ProductComponent';
import { ProductPageView } from './ProductPageView';

import { productPropTypes } from '../../../common/propTypes';
import { routes } from '../../../routes';
import * as Api from '../../../api/Api';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    // const {
    //   match: { params }
    //   // productList
    // } = this.props;
    // const product = productList.find(({ id }) => Number(params.id) === id);
    // console.log("state", this.props);

    // this.state = {
    //   ...product
    // };
    this.state = {
      loading: true,
    };
  }

  onChange = (name) => ({ target: { value } }) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit', this.state);
    this.props.updateProduct(this.state);
    this.props.history.push(routes.admin);
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { data: product } = await Api.adminProducts.fetchProduct(
      id,
    );
    this.setState({
      product,
      loading: false,
    });
    // debugger;
  }

  render() {
    // debugger;
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    console.log('props in Product container', this.state.product[0]);
    // const {
    //   match: {
    //     params: { id },
    //   },
    // } = this.props;
    return (
      <ProductPageView
        {...this.state}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        product={this.state.product[0]}
        // id={id}
      />
    );
  }
}

ProductContainer.T = {
  productList: arrayOf(productPropTypes).isRequired,
};

export default ProductContainer;
