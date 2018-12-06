import React, { Component } from 'react';
// import T from "prop-types";
// import styled from "styled-components";
import { arrayOf } from 'prop-types';
import { ProductComponent } from './ProductComponent';

import { productPropTypes } from '../../common/propTypes';
import { routes } from '../../routes';

export class ProductContainer extends Component {
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

  render() {
    return (
      <ProductComponent
        {...this.state}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

ProductComponent.T = {
  productList: arrayOf(productPropTypes).isRequired,
};
