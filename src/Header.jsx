import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

const Header = styled.header``;

const Logo = styled.img`
  display: block;
  width: 138px;
  height: 10px;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    width: 221px;
    height: 16px;
    padding: 2rem;
  }
`;

const Country = styled.button`
  // display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 1.5rem;
    left: 0.5rem;
    border: none;
    padding: 0;
    color: #999999;
    font-size: 0.75rem;
    line-height: 1rem;
    font-family: Raleway, sans-serif;
    font-weight: 700;
    background-color: transparent;
  }
`;

export default () => (
  <Header>
    <Country>Shopping in: United Kingdom(&#163;)</Country>
    <a href="/">
      <Logo src={logo} />
    </a>
  </Header>
);
