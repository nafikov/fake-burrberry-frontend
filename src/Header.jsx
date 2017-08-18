import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import hamburger from './assets/hamburger.svg';

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

const Hamburger = styled.img`
  display: block;
  width: 16px;
  height: 10px;
  
  position: absolute;
  top: 1.25rem;
  left: 0.5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Country = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    border: none;
    padding: 0;
    color: #999999;
    font-size: 0.75rem;
    line-height: 1rem;
    font-family: Raleway, sans-serif;
    font-weight: 700;
    background-color: transparent;
  }
  
  @media screen and (min-width: 992px) {
    top: 2rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

export default () => (
  <Header>
    <div className="container">
      <Wrapper>
        <Hamburger src={hamburger} />
        <Country>Shopping in: United Kingdom(&#163;)</Country>
        <a href="/">
          <Logo src={logo} />
        </a>
      </Wrapper>
    </div>
  </Header>
);
