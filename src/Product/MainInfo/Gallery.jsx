import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 4rem;

  .col-lg-4:nth-child(1) img {
    margin-top: 2rem;
  }

  .col-lg-4:nth-child(2) img {
    margin-top: 6rem;
  }
`;

const Image = styled.img`
  display: flex;
  width: 100%;
`;

export default () =>
  (<div className="container">
    <Wrapper>
      <div className="row">
        <div className="col-lg-4">
          <Image
            src="img/product-image-2@2x.png"
            alt="Long Cotton Gabardine Car Coat"
          />
        </div>
        <div className="col-lg-4">
          <Image
            src="img/product-image-4@2x.png"
            alt="Long Cotton Gabardine Car Coat"
          />
        </div>
        <div className="col-lg-4">
          <Image
            src="img/product-image-3@2x.png"
            alt="Long Cotton Gabardine Car Coat"
          />
        </div>
      </div>
    </Wrapper>
  </div>);
