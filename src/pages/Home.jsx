import React from "react";
import {
  HomeHero,
  Story,
  Menu,
  PopularDishes,
  WhatWeOffer,
} from "../components/homecomponents";
import Img from "../components/generalcomponents/Img";
import Testimonial from "../components/generalcomponents/Testimonial";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Story />
      <Menu />
      {/* <Img /> */}
      <PopularDishes />
      <Testimonial /> <Img />
      <WhatWeOffer />
      {/* <Reservation /> */}
    </>
  );
};

export default Home;
