import React from 'react';
import ProductListView from './ProductListView';
import * as Api from '../../../api/Api';

class ProductListContainer extends React.Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const {
      data: products,
    } = await Api.adminProducts.fetchProducts();
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return <ProductListView {...this.props} {...this.state} />;
  }
}

export default ProductListContainer;
