import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 0;
  border: solid 1px ${props => (props.active ? "#232122" : "transparent")};
  background-color: ${props => props.bgColor};
`;

export default function(props) {
  return (
    <Button bgColor={props.bgColor} active={props.active}>
      color: {props.label}
    </Button>
  );
}
