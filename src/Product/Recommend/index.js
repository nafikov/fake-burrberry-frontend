import React from "react";
import styled from "styled-components";
import Card from "./Card";

const productList = [
  {
    src: "img/item-001.jpg",
    href: "#",
    name: "Emroided Hooded",
    price: 27000
  },
  {
    src: "img/item-002.jpg",
    href: "#",
    name: "Relaxed Fit Stretch Jeans",
    price: 22500
  },
  {
    src: "img/item-003.jpg",
    href: "#",
    name: "Leather and House Check",
    price: 120000
  },
  {
    src: "img/item-004.jpg",
    href: "#",
    name: "Leather Wingtip Check",
    price: 46000
  }
];

const Wrapper = styled.div`
  padding-top: 2.5rem;

  @media screen and (min-width: 768px) {
    padding-top: 0.825rem;
  }

  @media screen and (min-width: 992px) {
    h2 {
      display: block;
      margin-top: 2.25rem;
      text-align: center;
    }
  }
`;

const Header = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  display: inline-block;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.175rem;
  font-weight: 400;
  color: #171717;
  border-bottom: 1px solid #171717;

  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 992px) {
    border-bottom: none;
  }
`;

export default () => {
  return (
    <Wrapper>
      <div className="container">
        <Header>WE RECOMMEND</Header>

        <div className="row">
          {productList.map((product, index) =>
            <div className="col-xs-6 col-md-3" key={index}>
              <Card src={product.src} name={product.name} price={product.price} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
