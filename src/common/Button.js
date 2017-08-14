import styled from "styled-components";

export default styled.button`
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-radius: 2px;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  border: solid 1px #171717;
  color: ${props => (props.primary ? "#ffffff" : "#171717")};
  background-color: ${props => (props.primary ? "#171717" : "Transparent")};

  @media screen and (min-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    margin-right: 1rem;
    width: 100%;
  }
`;
