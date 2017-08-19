import React from 'react';
import MoreShowing from './ShowingStats';
import Filter from './Filter';
import Nav from '../common/Nav';
import List from './Cards';

export default () =>
  (<main>
    <Nav />
    <Filter
      title="Men's Clothing"
    />
    <List />

    <MoreShowing />
  </main>);
