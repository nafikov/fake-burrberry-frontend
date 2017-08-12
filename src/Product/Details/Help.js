import React from "react";
import styled from "styled-components";

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

  @media screen and (min-width: 992px) {
    background-color: inherit;
    margin-bottom: 0;
  }
`;

const Help = () => {
  return <HelpButton>NEED SIZE HELP?</HelpButton>;
};

export default Help;
