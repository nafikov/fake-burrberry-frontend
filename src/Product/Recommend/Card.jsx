/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Wrapper = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Photo = styled.img`
  display: block;
  min-width: 130px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-family: Lora, serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: #171717;
`;

const Price = styled.h5`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: #999999;
`;

export default function Card(props) {
  return (
    <Wrapper href={props.href}>
      <Photo src={props.src} alt={props.name} />
      <Name>
        {props.name}
      </Name>
      <Price>
        <NumberFormat
          value={props.price}
          displayType="text"
          thousandSeparator=" "
          suffix=" руб."
        />
      </Price>
    </Wrapper>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
