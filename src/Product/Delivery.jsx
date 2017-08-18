import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Header = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.185rem;
  color: #171717;
`;

const Feature = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  display: block;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 0.25rem;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #171717;
`;

const Description = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <div className="row middle-lg">
        <div className="col-md-7 col-lg-7">
          <Image src="img/delivery.png" alt="delivery-image" />
        </div>
        <div className="col-md-5 col-lg-offset-1 col-lg-4">
          <Header>DELIVERY</Header>
          <Feature>
            <Title>Free Next Day Delivery</Title>
            <Description>
              Order before 7pm Monday to Thursday for delivery the next day
            </Description>
          </Feature>
          <Feature>
            <Title>Collect-in-Store</Title>
            <Description>
              Order online today and pick up your items in store as early as
              tomorrow
            </Description>
          </Feature>
          <Feature>
            <Title>Free Returns</Title>
            <Description>Enjoy free returns on your order</Description>
          </Feature>
          <Feature>
            <Title>Free Gift Packaging</Title>
            <Description>
              Discover our gift packaging, a gold lined box tied with a coloured
              ribbon
            </Description>
          </Feature>
        </div>
      </div>
    </div>
  </Wrapper>);
