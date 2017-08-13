import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #171717;
`;

const Item = styled.a`
  display: block;
  margin-bottom: 0.75rem;
  margin-right: 1.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #999999;
  text-decoration: none;
`;

export default function() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <nav>
            <Title>Customer service</Title>
            <Item>Contact Us</Item>
            <Item>Payment</Item>
            <Item>Shipping</Item>
            <Item>Returns</Item>
            <Item>Faqs</Item>
            <Item>Live Chat</Item>
            <Item>The Burberry App</Item>
            <Item>Store Locator</Item>
          </nav>
        </div>

        <div className="col-sm-3">
          <nav>
            <Title>Our company</Title>
            <Item>Our History</Item>
            <Item>Burberry Group Plc</Item>
            <Item>Careers</Item>
            <Item>Corporate Responsibility</Item>
            <Item>Site Map</Item>
          </nav>
        </div>

        <div className="col-sm-3">
          <nav>
            <Title>Legal & cookies</Title>
            <Item>Terms & Conditions</Item>
            <Item>Privacy Policy</Item>
            <Item>Cookie Policy</Item>
            <Item>Accessibility Statement</Item>
            <Item>Japan Only - SCTL indications</Item>
          </nav>
        </div>
      </div>
    </div>
  );
}
