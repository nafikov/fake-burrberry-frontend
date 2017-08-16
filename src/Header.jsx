import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

const Header = styled.header`border-bottom: 1px solid #c6c6c6;`;

const Logo = styled.img`
  display: block;
  width: 138px;
  height: 10px;
  margin: 0 auto;
  padding: 1rem;
  yarn upgrade eslint-plugin-jsx-a11y@^4.0.0 --dev

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    width: 221px;
    height: 16px;
    padding: 2rem;
  }
`;

export default () =>
  (<Header>
    <a href="/">
      <Logo src={logo} />
    </a>
  </Header>);
