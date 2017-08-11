import React from 'react';
import Title from './Title';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details'
import Description from './Description/Description';

export default function () {
  return (
    <main>
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

      <div className="container">
        <Description/>
      </div>


    </main>
  )
  
}