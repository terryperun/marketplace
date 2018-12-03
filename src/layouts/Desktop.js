import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { routes } from "../routes";

import { AdminPage } from "../routes/admin";
import { products } from "../components/mocks";
import "./Desktop.css";

const getProducts = async () =>
  new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });

class App extends Component {
  state = {
    products: [],
    loading: true
  };

  async componentDidMount() {
    const prods = await getProducts();
    this.setState({
      products: prods,
      loading: false
    });
  }

  updateProduct = newProduct => {
    console.log("new Product", newProduct);
    this.setState({
      products: this.state.products.map(oldProduct => {
        if (oldProduct.id === newProduct.id) {
          return newProduct;
        }
        return oldProduct;
      })
    });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <header>
          <p>
            <Link to={routes.admin}>Admin</Link>
          </p>
        </header>

        <Route
          path={routes.admin}
          render={renderProps => (
            <AdminPage
              productList={this.state.products}
              updateProduct={this.updateProduct}
              {...renderProps}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
