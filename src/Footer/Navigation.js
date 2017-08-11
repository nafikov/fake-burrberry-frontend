import React from 'react';
import styled from 'styled-components';

const NavTitle = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  color: #171717;
  
  // line-height: 0.875rem;
  `;

const NavItem = styled.a`
  display: block;
  margin-bottom: 0.75rem;
  margin-right: 1.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #999999;
  text-decoration: none;
`;

export default function () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <nav>
            <NavTitle>Customer service</NavTitle>
            <NavItem>Contact Us</NavItem>
            <NavItem>Payment</NavItem>
            <NavItem>Shipping</NavItem>
            <NavItem>Returns</NavItem>
            <NavItem>Faqs</NavItem>
            <NavItem>Live Chat</NavItem>
            <NavItem>The Burberry App</NavItem>
            <NavItem>Store Locator</NavItem>
          </nav>
        </div>

        <div className="col-sm-3">
          <nav>
            <NavTitle>Our company</NavTitle>
            <NavItem>Our History</NavItem>
            <NavItem>Burberry Group Plc</NavItem>
            <NavItem>Careers</NavItem>
            <NavItem>Corporate Responsibility</NavItem>
            <NavItem>Site Map</NavItem>
          </nav>
        </div>

        <div className="col-sm-3">
          <nav>
            <NavTitle>Legal & cookies</NavTitle>
            <NavItem>Terms & Conditions</NavItem>
            <NavItem>Privacy Policy</NavItem>
            <NavItem>Cookie Policy</NavItem>
            <NavItem>Accessibility Statement</NavItem>
            <NavItem>Japan Only - SCTL indications</NavItem>
          </nav>
        </div>
      </div>
    </div>
  )
}



