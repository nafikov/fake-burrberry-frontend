import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 1rem;
  margin-left: 0;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.2;
  font-family: Lora;
  color: #111111;

  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 0.5rem;
  }
`;

export default props =>
  <Title>
    {props.label}
  </Title>;
