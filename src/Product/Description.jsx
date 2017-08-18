import React from 'react';
import styled from 'styled-components';
import triangle from '../assets/triangle.svg';
import { Lg, XsMd } from '../common/Responsive';

const Description = styled.div`
  margin: 0;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 768px) {
    border-bottom: none;
  }
`;
const Image = styled.img`
  display: flex;
  width: 100%;
`;

const Submenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  border-top: 1px solid #c6c6c6;

  ::after {
    content: url(${triangle});
    ${props => (props.active ? 'transform: rotate(180deg);' : '')};
  }

  @media screen and (min-width: 768px) {
    border-color: transparent;
    padding: 1.5rem 1rem 1rem 0;

    ::after {
      content: '';
    }
  }

  @media screen and (min-width: 992px) {
    padding-top: 0;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 992px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  color: #171717;
`;

const Content = styled.div`
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 0 1rem;
  font-family: Lora;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #171717;

  p {
    margin: 0;
  }

  li {
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0;
    margin-bottom: 1.45rem;
  }
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <Description>
            <Submenu active>
              <Subtitle>DESCRIPTION</Subtitle>
            </Submenu>

            <Content>
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is a
                tightly woven and breathable fabric that protects against wind
                and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure complement the
                clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <ul>
                <li>
                  Coat length: 98cm/38.6in. This is based on a size UK 48 as
                  proportions change slightly according to size.
                </li>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Content>

            <XsMd>
              <Submenu>
                <Subtitle>SHIPPING &amp; RETURNS</Subtitle>
              </Submenu>
            </XsMd>
          </Description>
        </div>
        <Lg>
          <div className="col-lg-8">
            <Image src="img/product-image-5@2x.png" alt="Product Image 2" />
          </div>
        </Lg>
      </div>
    </div>
  </Wrapper>);
