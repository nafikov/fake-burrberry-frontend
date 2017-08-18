import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer/index';
import Product from './Product/index';
import Products from './Products/index';

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>
      <Header />
      <Product />
      <Products />
      <Footer />
    </div>
  );
}
