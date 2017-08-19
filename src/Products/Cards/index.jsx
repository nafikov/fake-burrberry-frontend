/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Hr from '../../common/Hr';

const heritageCoats = [
  {
    id: 1,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Westminster – Long Heritage Trench Coat',
    price: 1395,
    collection: 'Relaxed Fit',
    colors: 3,
  },
  {
    id: 2,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Kensington – Mid-Length Heritage Trench Coat',
    price: 1295,
    collection: 'Classic fit',
    colors: 4,
  },
  {
    id: 3,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Sandringham – Mid-length Heritage Trench Coat',
    price: 1295,
    collection: 'Tailered fit',
    colors: 3,
  },
  {
    id: 4,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Chelsea – Short Heritage Trench Coat',
    price: 1195,
    collection: 'Slim fit',
    colors: 3,
  },
  {
    id: 5,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Westminster – Long Heritage Trench Coat',
    price: 1395,
    collection: 'Relaxed Fit',
    colors: 3,
  },
  {
    id: 6,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Kensington – Long Heritage Trench Coat',
    price: 1395,
    collection: 'Classic fit',
    colors: 4,
  },
  {
    id: 7,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Sandringham Short Heritage Trench Coat',
    price: 1195,
    collection: 'Tailered fit',
    colors: 3,
  },
  {
    id: 8,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Chelsea – Long Heritage Trench Coat',
    price: 1395,
    collection: 'Slim fit',
    colors: 2,
  },
];

const singleBreastCoats = [
  {
    id: 1,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Brighton – Longline Car Coat',
    price: 1395,
    collection: 'Online Exclusive',
    colors: 7,
  },
  {
    id: 2,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Brighton – Longline Car Coat',
    price: 1395,
    collection: 'New in',
    colors: 7,
  },
  {
    id: 3,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Brighton – Longline Car Coat',
    price: 1395,
    collection: 'New in',
    colors: 7,
  },
  {
    id: 4,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Brighton – Longline Car Coat',
    price: 1395,
    collection: 'Online Exclusive',
    colors: 7,
  },
  {
    id: 5,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Camden – Mid-length Car Coat',
    price: 1195,
    collection: 'New in',
    colors: 3,
  },
  {
    id: 6,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/499e46c07518da4b2d208164cb6202b415346661.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Camden – Mid-length Car Coat',
    price: 1195,
    collection: 'New in',
    colors: 4,
  },
  {
    id: 7,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Camden – Mid-length Car Coat',
    price: 1195,
    collection: 'New in',
    colors: 3,
  },
  {
    id: 8,
    src:
      'https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540',
    href: '#',
    name: 'The Camden – Mid-length Car Coat',
    price: 1195,
    collection: 'New in',
    colors: 2,
  },
];

const Wrapper = styled.div`
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    padding-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const Header = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
  font-family: Lora, serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #171717;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Line = styled(Hr)`
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0rem;
  }
  
  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;
  }
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Header>Heritage Trench Coats</Header>
      <div className="row">
        {heritageCoats.map(product =>
          (<div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              href={product.href}
              src={product.src}
              name={product.name}
              price={product.price}
              collection={product.collection}
              colors={product.colors}
            />
          </div>),
        )}
      </div>
      <Line />

      <Header>Single Breasted Trench Coats</Header>
      <div className="row">
        {singleBreastCoats.map((product, index) =>
          (<div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              href={product.href}
              src={product.src}
              name={product.name}
              price={product.price}
              collection={product.collection}
              colors={product.colors}
            />
          </div>),
        )}
      </div>
    </div>
  </Wrapper>
  );
