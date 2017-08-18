import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 992px) {
    margin-bottom: 3rem;
  }
`;

const Price = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #111111;
`;

const Article = styled.p`
  display: inline-block;
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default () =>
  (<Wrapper>
    <Price>
      <NumberFormat
        value={110000}
        displayType="text"
        thousandSeparator=" "
        suffix=" руб."
      />
    </Price>
    <Article>Item 39428531</Article>
  </Wrapper>);
