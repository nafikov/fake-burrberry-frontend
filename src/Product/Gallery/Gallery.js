import React from 'react';
import GalleryPhoto from './GalleryPhoto';
import styled from 'styled-components';


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


export default function () {
  return (
    <Gallery>
      <GalleryPhoto photoName="product-image-1@2x" alt="Long Cotton Gabardine Car Coat"/>
      <GalleryPhoto photoName="product-image-2@2x" alt="Long Cotton Gabardine Car Coat"/>
      <GalleryPhoto photoName="product-image-3@2x" alt="Long Cotton Gabardine Car Coat"/>
      <GalleryPhoto photoName="product-image-4@2x" alt="Long Cotton Gabardine Car Coat"/>
    </Gallery>
  )
}