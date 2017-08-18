import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 0;
  padding: 1rem 2rem;
  border: solid 1px #171717;
  border-radius: 2px;
  background-color: transparent;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #171717;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper2 = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    margin-top: 5rem;
  }
`;

export default () => (
  <Wrapper1>
    <Wrapper2>
      <Title>Showing 8 of 17</Title>
      <Button>View 9 more</Button>
    </Wrapper2>
  </Wrapper1>
);
