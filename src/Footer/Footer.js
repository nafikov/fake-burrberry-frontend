import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';


const Footer = styled.footer`
  padding: 2rem 0.5rem;
  background-color: #f3f3f3;
  
  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }
  
  @media (min-width: 992px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  `;

const FooterMenu = styled.div`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 1.125rem;
  }
  `;

const Help = styled.h4`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #171717;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
  `;

const ContactLink = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Lora, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 0.875rem;
  line-height: 17px;
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
    margin-right: 1.25rem;
    margin-bottom: 0;
  }
  `;


export default function () {
  return (
    <Footer>
      <FooterMenu>
        <Navigation/>
      </FooterMenu>

      <div className="container">
        <Button type="button">Shipping country: Russian Federation</Button>
        <Button type="button">Language: English</Button>
      </div>

      <Help>Need help?</Help>
      <ContactLink href="/">Find out more and contact us</ContactLink>
    </Footer>
  )
}


  
