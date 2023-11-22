import React from "react";
import Section from "../generalcomponents/Section";
import Button from "../generalcomponents/Button";
import heroimg from "../../assets/images/heroimg.png";
const HomeHero = () => {
  return (
    <Section bg="mid-black">
      <div className="flex-1 flex flex-col md:flex-row justify-between items-center text-ash max-w-7xl pt-6 gap-8">
        <div className="flex flex-col gap-2 justify-center items-center md:items-start ">
          <h1 className="text-h1-sm md:text-h1-md lg:text-h1-lg leading-none text-center md:text-left font-cormorant">
            Welcome to Restaurantate
          </h1>
          <p className="text-justify text-md lg:text-lg">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <Button text="View Menu" extra="mt-3" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={heroimg}
            alt="hero_img"
            className="rounded-t-full w-[100%] md:w-[85%] border-t-[15px] border-x-[15px] border-midblack"
          />
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
