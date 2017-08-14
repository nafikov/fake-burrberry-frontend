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

const Link = styled.a`
  display: block;
  margin-bottom: 0.75rem;
  margin-right: 1.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #999999;
  text-decoration: none;
`;

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <nav>
            <Title>Customer service</Title>
            <Link>Contact Us</Link>
            <Link>Payment</Link>
            <Link>Shipping</Link>
            <Link>Returns</Link>
            <Link>Faqs</Link>
            <Link>Live Chat</Link>
            <Link>The Burberry App</Link>
            <Link>Store Locator</Link>
          </nav>
        </div>

        <div className="col-sm-3">
          <nav>
            <Title>Our company</Title>
            <Link>Our History</Link>
            <Link>Burberry Group Plc</Link>
            <Link>Careers</Link>
            <Link>Corporate Responsibility</Link>
            <Link>Site Map</Link>
          </nav>
        </div>

        <div className="col-sm-3">
          <nav>
            <Title>Legal & cookies</Title>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
            <Link>Accessibility Statement</Link>
            <Link>Japan Only - SCTL indications</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
