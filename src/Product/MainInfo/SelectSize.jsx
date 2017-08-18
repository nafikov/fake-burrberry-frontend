import React from 'react';
import styled from 'styled-components';
import Help from './Help';
import Button from '../../common/Button';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

const Value = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.167;
  color: #171717;
`;

const SizeValue = styled.span`font-weight: 700;`;

const Options = styled.div`
  display: flex;
  margin: 1.0625rem 0 2.3125rem;
`;

const Option = styled.button`
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0 1rem;
  border-radius: 2px;
  border: solid 1px #171717;
  background-color: inherit;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  font-size: 0.75rem;
  &:last-child {
    margin-right: 0;
  }
`;

export default () =>
  (<Wrapper>
    <Value>
      <Text>
        Size: <SizeValue>XL</SizeValue>
      </Text>
      <Help />
    </Value>

    <Options>
      <Option type="button">S</Option>
      <Option type="button">M</Option>
      <Option type="button">L</Option>
      <Option type="button" active>
        XL
      </Option>
    </Options>

    <Button type="button">FIND IN STORE</Button>
  </Wrapper>);
