import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;
  
  @media (min-width: 768px) {
    padding: 2rem 1rem;
    padding-left: 0;
  }

  @media (min-width: 992px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 16px;
  }
`;

const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 1.125rem;
  }
  
  @media screen and (min-width: 992px) {
    margin-bottom: 2.125rem;
    margin-top: 0.25rem;
  }
`;

const BlackText = styled.span`
  color: #171717;
`;

const Help = styled.h4`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #171717;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Contact = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Lora, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  display: block;
  
  margin-bottom: 1rem;
  border: none;
  padding: 0;
  font-family: Raleway, serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #f3f3f3;
  color: #999999;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
  
  @media screen and (min-width: 992px) {
    margin-right: 3rem;
  }
`;

export default () =>
  (<Footer>
    <Wrapper>
      <Navigation />
    </Wrapper>
    <div className="container">
      <Button type="button">Shipping country: <BlackText>Russian Federation</BlackText></Button>
      <Button type="button">Language: <BlackText>English</BlackText></Button>
    </div>
    <Help>Need help?</Help>
    <Contact href="/">Find out more and contact us</Contact>
  </Footer>);
