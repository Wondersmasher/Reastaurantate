import React from "react";
import Section from "../../generalcomponents/Section";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMenuBook } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import OfferItems from "./OfferItems";
const WhatWeOffer = () => {
  const whatweoffer = [
    {
      icon: <SlCalender className="text-yellow text-icon-xl" />,
      title: "Opened 24/7",
    },
    {
      icon: <MdOutlineMenuBook className="text-yellow text-icon-xl" />,
      title: "Special Menus",
    },
    {
      icon: <TbTruckDelivery className="text-yellow text-icon-xl" />,
      title: "Home Delivery",
    },
  ];
  return (
    <Section>
      <div className="flex-1 flex  flex-col md:flex-row justify-center items-center max-w-7xl text-ash gap-4">
        <div className="flex flex-col justify-center items-start gap-1 flex-1">
          <p className="text-md border-y-[1px] border-y-yellow">
            WHAT WE OFFER
          </p>
          <p className="text-sub-heading font-cormorant">Our Great Services</p>
          <p className="text-sm">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making <br /> it look like readable English.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap gap-2">
          {whatweoffer.map((item, id) => (
            <OfferItems key={id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatWeOffer;
