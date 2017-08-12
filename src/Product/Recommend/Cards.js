import React from "react";
import styled from "styled-components";
import Card from "./Card";

const productList = [
  {
    path: "img/item-001.jpg",
    name: "Emroided Hooded",
    price: 27000
  },
  {
    path: "img/item-002.jpg",
    name: "Relaxed Fit Stretch Jeans",
    price: 22500
  },
  {
    path: "img/item-003.jpg",
    name: "Leather and House Check",
    price: 120000
  },
  {
    path: "img/item-004.jpg",
    name: "Leather Wingtip Check",
    price: 46000
  }
];

const Cards = () => {
  return (
    <div className="row">
      {productList.map((product, index) =>
        <div className="col-xs-6 col-md-3" key={index}>
          <Card path={product.path} name={product.name} price={product.price} />
        </div>
      )}
    </div>
  );
};

export default Cards;
