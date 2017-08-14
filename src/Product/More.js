import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 0.25rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 400;
  color: #171717;
  border-bottom: 1px solid #171717;
`;

const Links = styled.div`margin-bottom: 4rem;`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-style: italic;
  font-size: 0.875rem;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #171717;
`;

export default () => {
  return (
    <div className="container">
      <Wrapper>
        <Title>MORE FOR YOU</Title>
        <Links>
          <Link href="#">Men’s Black Trench Coats</Link>
          <Link href="#">Men’s Short Trench Coats</Link>
          <Link href="#">Men’s Long Trench Coats</Link>
        </Links>
      </Wrapper>
    </div>
  );
};
