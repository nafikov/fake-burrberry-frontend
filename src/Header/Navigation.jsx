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
    <LinkStyled to="/catalog/women/">WOMEN</LinkStyled>
    <LinkStyled active to="/catalog/men/">MEN</LinkStyled>
    <LinkStyled to="/catalog/children/">CHILDREN</LinkStyled>
    <LinkStyled to="/catalog/beauty/">BEAUTY</LinkStyled>
    <LinkStyled to="/catalog/experience/">EXPERIENCE</LinkStyled>
  </Wrapper>
);
