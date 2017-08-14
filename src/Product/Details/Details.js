import React from "react";
import styled from "styled-components";
import Responsive from "react-responsive";
import Button from "../../common/Button";
import ButtonColor from "./ButtonColor";
import Info from "./Info";
import Size from "./Size";
import Help from "./Help";

const Desktop = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;

const Details = styled.div`
  padding: 1rem 1rem 0rem 1rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Color = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 300;
  color: #171717;
`;

const ColorValue = styled.span`font-weight: 700;`;

const Select = styled.div`
  @media (min-width: 992px) {
    margin-right: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`;

const ColorPicker = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c6c6;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media (min-width: 992px) {
    border-bottom: none;
  }
`;

const ActionWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const ColumnWrapper = styled.div`
  @media (min-width: 992px) {
    width: 50%;
    margin-right: 1rem;
  }
`;

const DeliveryInfo = styled.div`margin-top: 0.5rem;`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 0.25rem;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #171717;
`;

const Description = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

export default function() {
  return (
    <Details>
      <Info />

      <Select>
        <ColumnWrapper>
          <Color>
            Colour: <ColorValue>Honey</ColorValue>
          </Color>
          <ColorPicker>
            <ButtonColor color="#232122">color: Black</ButtonColor>
            <ButtonColor color="#cfa880" active>color: Honey</ButtonColor>
          </ColorPicker>
          <Desktop>
            <Button type="button" primary>ADD TO BAG</Button>
          </Desktop>
        </ColumnWrapper>
        <Desktop>
          <Size />
        </Desktop>
      </Select>

      <Desktop>
        <DeliveryInfo>
          <Title>Free Next Day Delivery</Title>
          <Description>
            Order before 7pm Monday to Thursday for delivery the next day
          </Description>
        </DeliveryInfo>
      </Desktop>

      <Mobile>
        <ActionWrapper>
          <Button type="button" primary>SELECT A SIZE</Button>
          <Button type="button">FIND IN STORE</Button>
        </ActionWrapper>
      </Mobile>

      <Mobile>
        <Help />
      </Mobile>
    </Details>
  );
}
