import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(NavLink)`
  padding: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #999999;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  
  &.active {
    color: #171717;
    border-bottom: 1px solid #171717;
  }
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
    <LinkStyled to="/catalog/women/">WOMEN</LinkStyled>
    <LinkStyled to="/catalog/men/">MEN</LinkStyled>
    <LinkStyled to="/catalog/children/">CHILDREN</LinkStyled>
    <LinkStyled to="/catalog/beauty/">BEAUTY</LinkStyled>
    <LinkStyled to="/catalog/experience/">EXPERIENCE</LinkStyled>
  </Wrapper>
);
