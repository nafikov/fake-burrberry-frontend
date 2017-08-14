import React from "react";
import Product from "./MainInfo/index";
import Description from "./Description";
import Delivery from "./Delivery";
import Recommend from "./Recommend";
import More from "./More";
import Gallery from "./MainInfo/Gallery";
import { Lg } from "../common/Responsive";

export default () => {
  return (
    <main>
      <Product />
      <Description />
      <Lg>
        <Gallery />
      </Lg>
      <Delivery />
      <Recommend />
      <More />
    </main>
  );
}
