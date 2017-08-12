import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Gallery from "./Gallery/Gallery";
import Details from "./Details/Details";
import Description from "./Description/Description";
import Delivery from "./Delivery/Delivery";
import Recommend from "./Recommend/Recommend";
import More from "./More";
import DesctopGallery from "./Gallery/DesctopGallery";
import Responsive from "react-responsive";

const Desctop = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;

const View = styled.div`
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
      <View>
        <div className="container">
          <Mobile>
            <Title label="Long Cotton Gabardine Car Coat" />
          </Mobile>

          <div className="row middle-lg">
            <div className="col-xs-12 col-md-7 col-lg-6">
              <Mobile>
                <Gallery />
              </Mobile>

              <Desctop>
                <MainImage
                  src="img/product-image-1@2x.png"
                  alt="Product Image"
                />
              </Desctop>
            </div>
            <div className="col-xs-12 col-md-5 col-lg-6">
              <Desctop>
                <Title label="Long Cotton Gabardine Car Coat Coat Coat Coat Coat" />
              </Desctop>

              <Details />
            </div>
          </div>
        </div>
      </View>

      <Description />

      <Desctop>
        <DesctopGallery />
      </Desctop>

      <Delivery />

      <Recommend />

      <More />
    </main>
  );
}
