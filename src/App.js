import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { routes } from "./routes";

import { AdminPage } from "./routes/admin";
import { products } from "./components/mocks";
import "./App.css";

// const getProducts = async () =>
class App extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    // const prods = await getProducts();
    this.setState({
      products
      // : prods
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>
            <Link to={routes.admin}>Admin</Link>
          </p>
        </header>
        <Route
          exact
          path={routes.admin}
          render={renderProps => (
            <AdminPage productList={this.state.products} {...renderProps} />
          )}
        />
      </div>
    );
  }
}

export default App;
