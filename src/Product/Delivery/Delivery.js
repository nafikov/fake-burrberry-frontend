import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Information from "./Information";

const Delivery = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export default function() {
  return (
    <Delivery>
      <div className="container">
        <div className="row middle-lg">
          <div className="col-md-7 col-lg-7">
            <Image />
          </div>

          <div className="col-md-5 col-lg-offset-1 col-lg-4">
            <Information />
          </div>
        </div>
      </div>
    </Delivery>
  );
}
