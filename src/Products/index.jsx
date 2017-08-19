import React from 'react';
import { Helmet } from 'react-helmet';
import Showing from './More';
import Header from './Header';
import List from './Cards';

export default () =>
  (<main>
    <Helmet>
      <title>Men | Burberry</title>
    </Helmet>
    <Header
      title="Men's Clothing"
    />
    <List />
    <Showing />
  </main>);
