import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default function () {
  return (
    <Image src="img/delivery.png" alt="delivery-image"/>
  )
}