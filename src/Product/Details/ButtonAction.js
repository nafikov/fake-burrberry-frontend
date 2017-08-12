import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 0;

  // todo: margin-bottom выровнять
  margin-bottom: 1rem;
  border-radius: 2px;

  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;

  border: solid 1px ${props => props.borderColor};
  color: ${props => props.fontColor};
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    margin-right: 1rem;
    width: 100%;
  }
`;

export default function(props) {
  return (
    <Button
      borderColor={props.borderColor}
      fontColor={props.fontColor}
      bgColor={props.bgColor}
    >
      {props.label}
    </Button>
  );
}
