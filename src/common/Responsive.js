import React from "react";
import Responsive from "react-responsive";

const Lg = ({ children }) => <Responsive minWidth={992} children={children} />;
const ToLg = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;

export { Lg, ToLg };