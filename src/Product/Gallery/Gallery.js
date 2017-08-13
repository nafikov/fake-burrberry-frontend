import React from "react";
import Image from "./Image";
import styled from "styled-components";

const Gallery = styled.div`
  display: flex;
  flex-flow: row;
  overflow-x: auto;
  flex-shrink: 0;
  margin: 0 -0.5rem;

  @media screen and (min-width: 576px) {
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;

export default function() {
  return (
    <Gallery>
      <Image
        name="product-image-1@2x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Image
        name="product-image-2@2x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Image
        name="product-image-3@2x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Image
        name="product-image-4@2x"
        alt="Long Cotton Gabardine Car Coat"
      />
    </Gallery>
  );
}
