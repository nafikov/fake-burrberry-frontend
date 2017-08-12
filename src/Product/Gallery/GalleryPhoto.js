import React from "react";
import styled from "styled-components";

const Item = styled.img`
  width: auto;
  height: 400px;

  @media screen and (min-width: 768px) {
    height: 576px;
  }
`;

export default function GalleryPhoto(props) {
  return <Item src={`img/${props.photoName}.png`} alt={props.alt} />;
}
