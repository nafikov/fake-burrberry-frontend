import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <Route exact path="/" component={Products} />
            <Route exact path="/men" component={Products} />
            <Route exact path="/coat" component={Product} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
