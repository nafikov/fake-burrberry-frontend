import React from 'react';
import { Helmet } from 'react-helmet';
import Showing from './Showing';
import Header from './Header';
import Nav from '../common/Nav';
import List from './Cards';

export default () =>
  (<main>
    <Helmet>
      <title>Men | Burberry</title>
    </Helmet>
    <Nav />
    <Header
      title="Men's Clothing"
    />
    <List />

    <Showing />
  </main>);
