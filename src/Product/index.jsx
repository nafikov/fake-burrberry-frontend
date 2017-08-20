/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import Product from './MainInfo/index';
import Description from './Description';
import Delivery from './Delivery';
import Recommend from './Recommend/index';
import More from './More';
import Gallery from './MainInfo/Gallery';
import { Lg } from '../common/Responsive';

export default () =>
  (<main>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
    </Helmet>
    <Product />
    <Description />
    <Lg>
      <Gallery />
    </Lg>
    <Delivery />
    <Recommend />
    <More />
  </main>);
