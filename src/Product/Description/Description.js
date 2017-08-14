import React from "react";
import styled from "styled-components";
import triangle from "../../files/triangle.svg";
import Content from "./Content";
import Responsive from "react-responsive";

const Desktop = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;

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
    ${props => (props.active ? "transform: rotate(180deg);" : "")};
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

const Title = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #171717;
`;

export default () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Description>
              <Submenu active>
                <Title>DESCRIPTION</Title>
              </Submenu>

              <Content />

              <Mobile>
                <Submenu>
                  <Title>SHIPPING &amp; RETURNS</Title>
                </Submenu>
              </Mobile>
            </Description>
          </div>
          <Desktop>
            <div className="col-lg-8">
              <Image src="img/product-image-5@2x.png" alt="Product Image 2" />
            </div>
          </Desktop>
        </div>
      </div>
    </Wrapper>
  );
}
