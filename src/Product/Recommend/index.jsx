/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const products = [
  {
    id: 1,
    src: `${process.env.PUBLIC_URL}/img/item-001.jpg`,
    href: '#',
    name: 'Emroided Hooded',
    price: 27000,
  },
  {
    id: 2,
    src: `${process.env.PUBLIC_URL}/img/item-002.jpg`,
    href: '#',
    name: 'Relaxed Fit Stretch Jeans',
    price: 22500,
  },
  {
    id: 3,
    src: `${process.env.PUBLIC_URL}/img/item-003.jpg`,
    href: '#',
    name: 'Leather and House Check',
    price: 120000,
  },
  {
    id: 4,
    src: `${process.env.PUBLIC_URL}/img/item-004.jpg`,
    href: '#',
    name: 'Leather Wingtip Check',
    price: 46000,
  },
];

const Wrapper = styled.div`
  padding-top: 2.5rem;

  @media screen and (min-width: 768px) {
    padding-top: 0.825rem;
  }
`;

const Header = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  display: inline-block;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.175rem;
  font-weight: 400;
  color: #171717;
  border-bottom: 1px solid #171717;

  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    margin-top: 2.25rem;
    display: block;
    text-align: center;
    border-bottom: none;
  }
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Header>WE RECOMMEND</Header>

      <div className="row">
        {products.map((product, index) =>
          (<div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              src={product.src}
              name={product.name}
              price={product.price}
            />
          </div>),
        )}
      </div>
    </div>
  </Wrapper>);
