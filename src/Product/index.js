/* eslint-disable no-unused-vars */
import React from 'react';
import Product from './MainInfo/index';
import Description from './Description';
import Delivery from './Delivery';
import Recommend from './Recommend/index';
import More from './More';
import Gallery from './MainInfo/Gallery';
import { Lg } from '../common/Responsive';
import Nav from '../common/Nav';
import MoreShowing from '../Products/ShowingStats';

export default () =>
  (<main>
    <Nav />
    <Product />
    <Description />
    <Lg>
      <Gallery />
    </Lg>
    <Delivery />
    <Recommend />
    <More />

    <MoreShowing />

  </main>);
