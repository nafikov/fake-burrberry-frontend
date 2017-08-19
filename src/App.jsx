import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/index';
import Product from './Product/index';
import Products from './Products/index';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Burberry</title>
          </Helmet>
          <Header />
          <Switch>
            <Route exact path="/catalog/men" component={Products} />
            <Route exact path="/catalog/men/:category/:id" component={Product} />
            <Redirect from="/" to="/catalog/men" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
