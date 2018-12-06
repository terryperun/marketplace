import React from 'react';
import { ProductLink } from '../../../components/ProductLink/ProductLink';

const ProductListView = ({ products }) => {
  return (
    <div>
      {products.map(({ title, id, image, price }) => (
        <ProductLink
          key={id}
          id={id}
          title={title}
          image={image}
          // price={price}
        />
      ))}
    </div>
  );
};

export default ProductListView;
