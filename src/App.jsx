import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer';
import Product from './Product';
import Products from './Products';

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
