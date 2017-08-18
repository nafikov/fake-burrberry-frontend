import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filters from './Filters';

const Wrapper = styled.div`
  background-color: #f3f3f3;
  padding-top: 2rem;
  
  @media screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-weight: 500;
  font-size: 1.625rem;
  line-height: 2rem;
  color: #171717;
`;

const Button = styled.button`
  display: none;

@media screen and (min-width: 768px) {
  display: inline-block;
  padding: 0;
  font-family: Raleway, sans-serif;
  color: #171717;  
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #171717;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export default function Filter(props) {
  return (
    <Wrapper>
      <div className="container">
        <Header>{props.title}</Header>
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-7">
            <Description>
              Explore our menswear collection for the season.
              Sculptural knitwear, sweatshirts, artist overalls and
              oversized cabans feature alongside our signature trench
              coat in both heritage. <Button type="button">More</Button>
            </Description>
          </div>
        </div>
        <Filters />
      </div>
    </Wrapper>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
