import React from "react";
import {
  AboutGallery,
  AboutHero,
  AboutUs,
  Chefs,
  SplashImage,
} from "../components/aboutcomponents";
import Testimonial from "../components/generalcomponents/Testimonial";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutUs />
      <SplashImage image="bg-foods-bg" />
      <Chefs />
      <Testimonial />
      <AboutGallery />
    </>
  );
};

export default About;
