import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import ButtonColor from './ButtonColor';
import { Lg, XsMd } from '../../common/Responsive';
import Info from './Info';
import Size from './SelectSize';
import Help from './Help';

const Wrapper = styled.div`
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

const colors = [
  {
    name: 'Honey',
    color: '#cfa880',
  },
  {
    name: 'Black',
    color: '#000',
  },
];

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: 0,
    };
  }

  selectColor(color) {
    this.setState({
      activeColor: color,
    });
  }

  render() {
    return (
      <Wrapper>
        <Info />

        <Select>
          <ColumnWrapper>
            <Color>
              Colour: <ColorValue>{this.state.activeColor.name}</ColorValue>
            </Color>
            <ColorPicker>
              {colors.map(entry =>
                (<ButtonColor
                  color={entry.color}
                  onClick={() => this.selectColor(entry)}
                  active={this.state.activeColor === entry}
                />),
              )}
            </ColorPicker>
            <Lg>
              <Button type="button" primary>
                ADD TO BAG
              </Button>
            </Lg>
          </ColumnWrapper>
          <Lg>
            <Size />
          </Lg>
        </Select>

        <Lg>
          <DeliveryInfo>
            <Title>Free Next Day Delivery</Title>
            <Description>
              Order before 7pm Monday to Thursday for delivery the next day
            </Description>
          </DeliveryInfo>
        </Lg>

        <XsMd>
          <ActionWrapper>
            <Button type="button" primary>
              SELECT A SIZE
            </Button>
            <Button type="button">FIND IN STORE</Button>
          </ActionWrapper>
        </XsMd>

        <XsMd>
          <Help />
        </XsMd>
      </Wrapper>
    );
  }
}

export default Details;
