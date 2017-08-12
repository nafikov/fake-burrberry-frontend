import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Wrap = styled.div`
  padding-top: 2.5rem;
  
  @media screen and (min-width: 768px) {
    padding-top: 0.825rem;
  }
`;

const Header = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  display: inline-block;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.175rem;
  font-weight: 400;
  color: #171717;
  border-bottom: 1px solid #171717;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
    padding-bottom: 0.4375rem;
    padding-left: 0;
    line-height: 1.1875rem;
  }
`;

const Recomedations = () => {
  return (
    <Wrap>
      <div className="container">
        <Header>WE RECOMMEND</Header>
        <Cards/>
      </div>
    </Wrap>
  )
};

export default Recomedations;