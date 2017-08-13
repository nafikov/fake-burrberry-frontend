import React from "react";
import styled from "styled-components";

const Wrap = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Photo = styled.img`
  display: block;
  min-width: 130px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-family: Lora, serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: #171717;
`;

const Price = styled.h5`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: #999999;
`;

const Card = props => {
  return (
    <Wrap href="#">
      <Photo src={props.path} alt={props.name} />
      <Name>
        {props.name}
      </Name>
      <Price>
        {props.price} руб
      </Price>
    </Wrap>
  );
};

export default Card;
