import React, { memo } from "react";
import Section from "./Section";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa6";

import img from "../../assets/images/avroko.png";
const Testimonial = () => {
  return (
    <Section bg="mid-black">
      <div className="flex-1 flex flex-col gap-2 items-center text-ash max-w-7xl">
        {/* <FaAngleLeft className="text-yellow text-[30px] m-2 absolute top-[50%] left-0 cursor-pointer" />
        <FaAngleRight className="text-yellow text-[30px] m-2 absolute top-[50%] right-0 cursor-pointer" /> */}
        <p className="text-md border-y-[1px] border-yellow uppercase">
          testimonial
        </p>
        <p className="text-sub-heading font-cormorant capitalize">
          what our clients say
        </p>
        <FaQuoteRight className="text-yellow text-[40px] m-2" />
        <p className="text-center text-md italic px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          consectetur odit dolores, nesciunt nihil aspernatur! Facilis ea fuga
          at obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img
          src={img}
          alt="customer"
          className="w-16 h-16 rounded-full object-cover object-center mt-2 bg-chef-bg"
        />
        <p>Daniyal Sppra</p>
        <p className="text-yellow text-sm font-thin">Designer</p>
      </div>
    </Section>
  );
};

export default memo(Testimonial);
