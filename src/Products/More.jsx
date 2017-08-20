import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 0;
  padding: 1rem 2rem;
  border: 1px solid #171717;
  border-radius: 2px;
  background-color: transparent;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 500;
  color: #171717;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  color: #171717;

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  
  @media screen and (min-width: 992px) {
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
  
  @media screen and (min-width: 992px) {
    margin-top: 1rem;
  }
`;

export default () => (
  <Wrapper>
    <Title>Showing 8 of 17</Title>
    <Button type="button">View 9 more</Button>
  </Wrapper>
);
