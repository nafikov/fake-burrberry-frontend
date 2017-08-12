import React from 'react';
import { Helmet } from "react-helmet";
import Title from './Title';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details'
import Description from './Description/Description';
import Delivery from './Delivery/Delivery';
import Recommend from './Recommend/Recommend';

export default function () {
  return (
    <main>
      <Helmet>
        <title>
          Long Cotton Gabardine Car Coat | Men - Burberry"
        </title>
      </Helmet>
      <div className="container">
        <Title label="Long Cotton Gabardine Car Coat"/>
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <Gallery/>
          </div>
          <div className="col-xs-12 col-sm-5">
            <Details/>
          </div>
        </div>
      </div>

      <Description/>

      <Delivery/>

      <Recommend/>

    </main>
  )

}