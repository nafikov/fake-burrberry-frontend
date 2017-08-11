import React from 'react';
import styled from 'styled-components';

const ProductTitle = styled.h1`
  margin: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.2;
  font-family: Lora;
  color: #111111;
  
  @media screen and (min-width: 576px) {
    margin-left: 0;
  }
  
  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

export default props =>
  (
    <ProductTitle>
      {props.label}
    </ProductTitle>
  );
