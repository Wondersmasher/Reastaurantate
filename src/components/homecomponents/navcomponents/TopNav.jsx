import React from "react";
import Button from "../../generalcomponents/Button";
import Logo from "../../generalcomponents/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Section from "../../generalcomponents/Section";

const TopNav = () => {
  return (
    <Section bg="mid-black" py="py-8">
      <div className="flex-1 flex justify-between items-center max-w-7xl">
        <Button text="call - 987 654 321" extra="hidden md:block" />
        <Logo />
        <div className="flex gap-4 justify-center items-center">
          <AiOutlineShoppingCart className="text-white text-icon-sm md:text-icon-md lg:text-icon-lg  hidden md:block" />
          <button className="border-[1px] text-black bg-yellow border-yellow px-3 py-2 text-sm lg:text-md hover:bg-transparent hover:text-white transition-colors duration-700 hidden md:block">
            Reservation
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TopNav;
