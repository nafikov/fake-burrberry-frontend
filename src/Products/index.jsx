import React from 'react';
import MoreShowing from './ShowingStats';
import Filter from './Filter';
import Nav from '../common/Nav';

export default () =>
  (<main>
    <Nav />
    <Filter
      title="Men's Clothing"
    />
    <MoreShowing />
  </main>);
