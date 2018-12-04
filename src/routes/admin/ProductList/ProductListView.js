import React from "react";
import { ProductLink } from "../../../components/ProductLink";

const ProductListView = ({ products }) => {
  return (
    <div>
      {products.map(({ title, id }) => (
        <ProductLink key={id} id={id} title={title} />
      ))}
    </div>
  );
};

export default ProductListView;
