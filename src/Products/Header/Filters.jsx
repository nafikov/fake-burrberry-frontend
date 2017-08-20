import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

const Filters = styled.div`display: flex;`;

const Filter = styled.div`
  position: relative;
  padding: 1.5rem 0;
  margin-right: 1rem;
  padding-right: 1.25rem;
  white-space: nowrap;

  &:after {
    position: absolute;
    content: '';
    top: 1.875rem;
    right: 0;
    width: 12px;
    height: 6px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }

  @media only screen and (min-width: 48rem) {
    margin-right: 3rem;
  }
`;

const Sort = styled.div`
  position: relative;
  padding: 1.5rem 0;
  padding-right: 1.25rem;
  white-space: nowrap;

  &:after {
    position: absolute;
    content: '';
    top: 1.875rem;
    right: 0;
    width: 12px;
    height: 6px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }
`;

export default () => (
  <Wrapper>
    <Filters>
      <Filter>Category</Filter>
      <Filter>Colour</Filter>
      <Filter>Size</Filter>
    </Filters>
    <Sort>Sort by price</Sort>
  </Wrapper>
);
