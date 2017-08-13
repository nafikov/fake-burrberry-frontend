import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: auto;
  height: 400px;

  @media screen and (min-width: 768px) {
    height: 576px;
  }
`;

export default props =>
  <Image src={`img/${props.name}.png`} alt={props.alt} />;