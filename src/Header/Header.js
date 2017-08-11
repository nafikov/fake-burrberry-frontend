import React from 'react';
import logo from '../files/logo.svg';
import styled from 'styled-components'


const HeaderComponent = styled.header`
  border-bottom: 1px solid #c6c6c6;
  `;

const Logo = styled.img`
  display: block;
  width: 138px;
  height: 10px;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`;

function Header() {
  return (
    <HeaderComponent>
      <a href="/">
        <Logo src={logo}></Logo>
      </a>
    </HeaderComponent>
  )
}

export default Header
