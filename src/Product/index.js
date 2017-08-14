import React from "react";
import styled from "styled-components";
import Header from "./MainInfo/Header";
import GalleryXsMd from "./MainInfo/GalleryXsMd";
import MainInfo from "./MainInfo";
import Description from "./Description";
import Delivery from "./Delivery";
import Recommend from "./Recommend/";
import More from "./More";
import GalleryLg from "./MainInfo/GalleryLg";
import { Lg, XsMd } from "../common/Responsive";

const Show = styled.div`
  @media (min-width: 992px) {
    margin-bottom: 4rem;
    background-color: #d4bdad;
  }
`;

const MainImage = styled.img`
  display: flex;
  width: 488px;
  height: 651px;
  margin: 0 -0.5rem;
`;

export default function() {
  return (
    <main>
      <Show>
        <div className="container">
          <XsMd>
            <Header label="Long Cotton Gabardine Car Coat" />
          </XsMd>

          <div className="row middle-lg">
            <div className="col-xs-12 col-md-7 col-lg-6">
              <XsMd>
                <GalleryXsMd />
              </XsMd>

              <Lg>
                <MainImage
                  src="img/product-image-1@2x.png"
                  alt="Product Image"
                />
              </Lg>
            </div>
            <div className="col-xs-12 col-md-5 col-lg-6">
              <Lg>
                <Header label="Long Cotton Gabardine Car Coat Coat Coat Coat Coat" />
              </Lg>

              <MainInfo />
            </div>
          </div>
        </div>
      </Show>
      <Description />
      <Lg>
        <GalleryLg />
      </Lg>
      <Delivery />
      <Recommend />
      <More />
    </main>
  );
}
