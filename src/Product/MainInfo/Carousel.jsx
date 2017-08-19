/* eslint-disable prefer-template */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  overflow-x: auto;
  flex-shrink: 0;
  margin: 0 -0.5rem;

  @media screen and (min-width: 576px) {
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;

const Image = styled.img`
  width: auto;
  height: 400px;

  @media screen and (min-width: 768px) {
    height: 576px;
  }
`;

export default () =>
  (<Wrapper>
    <Image
      src={process.env.PUBLIC_URL + '/img/product-image-1@2x.png'}
      alt="Long Cotton Gabardine Car Coat"
    />
    <Image
      src={process.env.PUBLIC_URL + '/img/product-image-2@2x.png'}
      alt="Long Cotton Gabardine Car Coat"
    />
    <Image
      src={process.env.PUBLIC_URL + '/img/product-image-3@2x.png'}
      alt="Long Cotton Gabardine Car Coat"
    />
    <Image
      src={process.env.PUBLIC_URL + '/img/product-image-4@2x.png'}
      alt="Long Cotton Gabardine Car Coat"
    />
  </Wrapper>);
