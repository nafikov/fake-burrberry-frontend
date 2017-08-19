import React from 'react';
import { Helmet } from 'react-helmet';
import MoreShowing from './ShowingStats';
import Filter from './Filter';
import Nav from '../common/Nav';
import List from './Cards';

export default () =>
  (<main>
    <Helmet>
      <title>Men | Burberry</title>
    </Helmet>
    <Nav />
    <Filter
      title="Men's Clothing"
    />
    <List />

    <MoreShowing />
  </main>);
