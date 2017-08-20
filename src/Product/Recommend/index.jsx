/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Card from '../../Products/Cards/Card';

const products = [
  {
    id: 1,
    src: 'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'Emroided Hooded',
    price: 1395,
    collection: 'Relaxed fit',
    colors: 3,
    link: '/catalog/men/coats/westminster–long-heritage-trench-coat',
  },
  {
    id: 2,
    src: 'https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'Relaxed Fit Stretch Jeans',
    price: 1295,
    collection: 'Relaxed fit',
    colors: 3,
    link: '/catalog/men/coats/westminster–long-heritage-trench-coat',
  },
  {
    id: 3,
    src: 'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'Leather and House Check',
    price: 1295,
    collection: 'Relaxed fit',
    colors: 3,
    link: '/catalog/men/coats/westminster–long-heritage-trench-coat',
  },
  {
    id: 4,
    src: 'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'Leather Wingtip Check',
    price: 1195,
    collection: 'Relaxed fit',
    colors: 3,
    link: '/catalog/men/coats/westminster–long-heritage-trench-coat',
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
              href={product.href}
              src={product.src}
              name={product.name}
              price={product.price}
              collection={product.collection}
              colors={product.colors}
              link={product.link}
            />
          </div>),
        )}
      </div>
    </div>
  </Wrapper>);
