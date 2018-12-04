import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { routes } from "../routes";

import { AdminPage } from "../routes/admin";
import "./Desktop.css";

class App extends Component {
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
    return (
      <div className="App">
        <header>
          <p>
            <Link to={routes.admin}>Admin</Link>
          </p>
        </header>

        <Route path={routes.admin} component={AdminPage} />
      </div>
    );
  }
}

export default App;
