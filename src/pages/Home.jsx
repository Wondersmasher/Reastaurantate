import React from "react";
import {
  Hero,
  Story,
  Menu,
  PopularDishes,
  WhatWeOffer,
  Reservation,
} from "../components/homecomponents";
import Img from "../components/generalcomponents/Img";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Menu />
      <Img />
      <PopularDishes />
      <WhatWeOffer />
      <Reservation />
    </>
  );
};

export default Home;
