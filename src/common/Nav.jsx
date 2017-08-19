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
  text-decoration: none;
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
    <Link href="#">WOMEN</Link>
    <Link href="#" active>MEN</Link>
    <Link href="#">CHILDREN</Link>
    <Link href="#">BEAUTY</Link>
    <Link href="#">EXPERIENCE</Link>
  </Wrapper>
);
