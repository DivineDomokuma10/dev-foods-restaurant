import React from "react";

const Carousel = ({ children, arrs }) => {
  return <div>{arrs.map((arr) => children)}</div>;
};

export default Carousel;
