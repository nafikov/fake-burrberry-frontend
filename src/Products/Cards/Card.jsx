/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Wrapper = styled.a`
  margin-bottom: 2rem;
  display: block;
  text-decoration: none;
  
  @media only screen and (min-width: 48rem) {
    margin-bottom: 2rem;
  }
`;

const Info = styled.h4`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
`;

const Price = styled(Info)`
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const Photo = styled.img`
  display: block;
  margin-bottom: 1rem;
  min-width: 144px;
  width: 100%;
  height: auto;
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #171717;
  
  @media only screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  @media only screen and (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const Underline = styled.span`
  display: inline-block;
  border-bottom: 1px solid #171717;
`;

export default function Card(props) {
  return (
    <Wrapper href={props.href}>
      <Photo src={props.src} alt={props.name} />
      <Info>{props.collection}</Info>
      <Name>{props.name}</Name>
      <Info>Available in <Underline>{props.colors} colours</Underline></Info>
      <Price>
        <NumberFormat
          value={props.price}
          displayType="text"
          thousandSeparator=","
          decimalSeparator="."
          prefix="&#163;"
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
  colors: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
