import React from 'react';
import styled from 'styled-components';
import ButtonAction from './ButtonAction';
import ButtonColor from './ButtonColor';

const Details = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const InfoPrice = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  color: #111111;
`;

const InfoArticle = styled.p`
  display: inline-block;
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
  color: #171717;
`;

const InfoColor = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 300;
  color: #171717;
`;

const ColorPicker = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c6c6;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin-top: 1px;
`;

const ActionWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const HelpButton = styled.button`
  display: block;
  margin: 0;
  margin-bottom: 3rem;
  padding: 0;
  border: none;
  background-color: #ffffff;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
`;

export default function () {
  return (
    <Details>
      <Info>
        <InfoPrice>110 000 руб</InfoPrice>
        <InfoArticle>Item 39428531</InfoArticle>
      </Info>

      <InfoColor>Colour: Honey</InfoColor>

      <ColorPicker>
        <ButtonColor bgColor="#232122" label="Black"/>
        <ButtonColor bgColor="#cfa880" label="Honey"/>
      </ColorPicker>

      <ActionWrap>
        <ButtonAction type="button" borderColor="#171717" fontColor="#ffffff" bgColor="#171717" label="SELECT A SIZE"/>
        <ButtonAction type="button" borderColor="#999999" fontColor="#171717" bgColor="#ffffff" label="FIND IN STORE"/>
      </ActionWrap>

      <HelpButton>NEED SIZE HELP?</HelpButton>
    </Details>
  )
}