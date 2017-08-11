import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  border: 1px solid transparent;
  font-size: 0;
  
  background-color: ${props => props.bgColor};
`;

export default function (props) {
  return (
    <Button bgColor={props.bgColor}>
      color: {props.label}
    </Button>
  )
}

