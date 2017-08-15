import styled from "styled-components";

export default styled.button`
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  font-size: 0;
  border: solid 1px ${props => (props.active ? "#232122" : "transparent")};
  background-color: ${props => props.color};
`;
