import React from 'react';
import styled from 'styled-components';
import triangle from '../../files/triangle.svg';
import DescContent from './DescContent';

const Description = styled.div`
  margin: 0;
  border-bottom: 1px solid #c6c6c6;
  
  @media screen and (min-width: 768px) {
    border-bottom: none;
  }
`;

const DescSubmenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  border-top: 1px solid #c6c6c6;
  
    ::after {
      content: url(${triangle});
      ${props => (props.active ? 'transform: rotate(180deg);' : '')};
    }
  
  @media screen and (min-width: 768px) {
    border-color:transparent;
    padding: 1.5rem 1rem 1rem 0;
    
    ::after {
      content: '';
    }
  }
`;

const DescTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #171717;
`;

export default function () {
  return (
    <div className="container">
      <Description>
        <DescSubmenu active>
          <DescTitle>DESCRIPTION</DescTitle>
        </DescSubmenu>

        <DescContent/>

        <DescSubmenu>
          <DescTitle>SHIPPING &amp; RETURNS</DescTitle>
        </DescSubmenu>
      </Description>
    </div>
  )
}
