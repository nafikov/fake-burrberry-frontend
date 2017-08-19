/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import heart from '../../assets/heart.svg';

const Wrapper = styled.a`
  margin-bottom: 2rem;
  display: block;
  text-decoration: none;
  
  @media only screen and (min-width: 48rem) {
    margin-bottom: 2rem;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #171717;
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

const Like = styled.button`
  display: inline-block;
  content: '';
  height: 14px;
  width: 14px;
  border: none;
  background: url(${heart}) no-repeat;
  background-position: center;
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
    margin-right: 2.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  @media only screen and (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const Promo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Underline = styled.span`
  display: inline-block;
  border-bottom: 1px solid #171717;
`;

export default function Card(props) {
  return (
    <Wrapper>
      <LinkStyled to="/catalog/men/coats/1">
        <Photo src={props.src} alt={props.name} />
      </LinkStyled>

      <Promo>
        <Info>{props.collection}</Info>
        <Like type="button" />
      </Promo>

      <LinkStyled to="/catalog/men/coats/1">
        <Name>{props.name}</Name>
      </LinkStyled>
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
