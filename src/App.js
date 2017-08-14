import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";

export default function App() {
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
};
