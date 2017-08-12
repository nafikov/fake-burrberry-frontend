import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #171717;
`;

const DeliveryFeature = styled.div`
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

const InformationWrap = styled.div`
`;

export default function () {
  return (
    <div>Order before 7pm Monday to Thursday for delivery the next day
      <Header>DELIVERY</Header>

      <DeliveryFeature>
        <Title>Free Next Day Delivery</Title>
        <Description></Description>
      </DeliveryFeature>

      <DeliveryFeature>
        <Title>Collect-in-Store</Title>
        <Description>Order online today and pick up your items in store as early as tomorrow</Description>
      </DeliveryFeature>

      <DeliveryFeature>
        <Title>Free Returns</Title>
        <Description>Enjoy free returns on your order</Description>
      </DeliveryFeature>

      <DeliveryFeature>
        <Title>Free Gift Packaging</Title>
        <Description>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Description>
      </DeliveryFeature>

    </div>
  )

}


