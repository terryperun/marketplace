import React, { Component } from "react";
import T from "prop-types";
import styled from "styled-components";

import { productPropTypes } from "../common/propTypes";
import { arrayOf } from "prop-types";
import { routes } from "../routes";

const InputField = styled.input`
  display: block;
`;

const TextArea = styled.textarea`
  display: block;
`;

export const ProductComponent = ({
  title,
  id,
  description,
  onSubmit,
  image,
  price,
  onChange
}) => (
  <form onSubmit={onSubmit}>
    <InputField name="title" value={title} onChange={onChange("title")} />
    <TextArea
      name="description"
      value={description}
      onChange={onChange("title")}
    />
    <button type="submit">Save</button>
  </form>
);

ProductComponent.T = productPropTypes;

export class ProductContainer extends Component {
  constructor(props) {
    super(props);

    const {
      match: { params },
      productList
    } = this.props;
    const product = productList.find(({ id }) => Number(params.id) === id);
    console.log("state", this.props);

    this.state = {
      ...product
    };
  }

  onChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("onSubmit", this.state);
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
  productList: arrayOf(productPropTypes).isRequired
};
