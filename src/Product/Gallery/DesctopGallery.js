import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  margin-bottom: 4rem
`;

const Image = styled.img`
  display: flex;
  width: 100%;

  ${props =>
props.margin2 &&
`
    margin-top: 2rem;
  `};

  ${props =>
props.margin6 &&
`
    margin-top: 6rem;
  `};
`;

const DesctopGallery = (props) => {
  return (
    <div className="container">
      <Gallery>
        <div className="row">
          <div className="col-lg-4">
            <Image
              src="img/product-image-4@2x.png"
              alt="Long Cotton Gabardine Car Coat"
              margin2
            />
          </div>
          <div className="col-lg-4">
            <Image
              src="img/product-image-3@2x.png"
              alt="Long Cotton Gabardine Car Coat"
              margin6
            />
          </div>
          <div className="col-lg-4">
            <Image
              src="img/product-image-2@2x.png"
              alt="Long Cotton Gabardine Car Coat"
            />
          </div>
        </div>
      </Gallery>
    </div>
  )
}

export default DesctopGallery;