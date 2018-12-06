import React from 'react';
import { ProductComponent } from '../../../components/Product/ProductComponent';

export const ProductPageView = ({
  onSubmit,
  onChange,
  product,
  ...state
}) => {
  return (
    <ProductComponent
      product={product}
      onSubmit={onSubmit}
      onChange={onChange}
      // {...state}
    />
  );
};
