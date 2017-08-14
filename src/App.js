import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry"</title>
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
