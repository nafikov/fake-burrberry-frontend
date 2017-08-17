import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  padding: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: ${props => (props.active ? '#171717' : '#999999')};
  border-bottom: ${props => (props.active ? 'solid 1px #171717;' : 'none')};
`;

const Wrapper = styled.div`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default () => (
  <Wrapper>
    <Link>WOMEN</Link>
    <Link active>MEN</Link>
    <Link>CHILDREN</Link>
    <Link>BEAUTY</Link>
    <Link>EXPERIENCE</Link>
  </Wrapper>
);
