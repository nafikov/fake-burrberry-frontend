import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import arrow from '../assets/arrow.svg';
import Navigation from './Navigation';

const Header = styled.header``;

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 0 auto;
  padding: 1.125rem;

  @media screen and (min-width: 768px) {
    height: 16px;
    padding: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    width: 221px;
    padding: 2rem;
  }
`;

const Hamburger = styled.img`
  position: absolute;
  top: 1.125rem;
  
  display: block;
  width: 16px;
  height: 12px;

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
    font-weight: 600;
    background-color: transparent;
  }
  
  @media screen and (min-width: 992px) {
    top: 2rem;
  }
  
  ::after{
    display: inline-block;    
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    background: url(${arrow});
    background-size: cover;
    content: '';
  }
`;

const CountrySelect = styled.select`
  margin-left: 0.5rem;
  display: inline-block;
  padding: 0;
  border: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: #999;
  background: transparent;
  cursor: pointer;
  appearance: none;
`;

const Wrapper = styled.div`
  position: relative;
`;

export default () => (
  <Header>
    <div className="container">
      <Wrapper>
        <Hamburger src={hamburger} />
        <Country>
          Shopping in:
          <CountrySelect>
            <option> Russian Federation (₽)</option>
            <option> United Kingdom (£)</option>
            <option> United States ($)</option>
          </CountrySelect>
        </Country>
        <a href="/">
          <Logo src={logo} />
        </a>
      </Wrapper>
    </div>
    <Navigation />
  </Header>
);
