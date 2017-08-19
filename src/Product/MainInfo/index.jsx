/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import PhotosCarousel from './Carousel';
import Details from './Details';
import { Lg, XsMd } from '../../common/Responsive';

const Wrapper = styled.div`
  @media (min-width: 992px) {
    margin-bottom: 4rem;
    background-color: #d4bdad;
  }
`;

const MainImage = styled.img`
  display: flex;
  width: 488px;
  height: 651px;
  margin: 0 -0.5rem;
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <XsMd>
        <Header>Long Cotton Gabardine Car Coat</Header>
      </XsMd>

      <div className="row middle-lg">
        <div className="col-xs-12 col-md-7 col-lg-6">
          <XsMd>
            <PhotosCarousel />
          </XsMd>

          <Lg>
            <MainImage src={process.env.PUBLIC_URL + '/img/product-image-1@2x.png'} alt="Product Image" />
          </Lg>
        </div>
        <div className="col-xs-12 col-md-5 col-lg-6">
          <Lg>
            <Header>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Header>
          </Lg>

          <Details />
        </div>
      </div>
    </div>
  </Wrapper>);
