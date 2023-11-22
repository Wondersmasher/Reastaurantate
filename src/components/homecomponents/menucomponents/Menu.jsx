import React from "react";
import sideimg from "../../../assets/images/sideimg.png";
import { menuData } from "../../../assets/datas";
import { Button, Section } from "../../generalcomponents";
import Dishes from "./Dishes";
const Menu = () => {
  return (
    <Section bg="w">
      <div className="flex-1 flex flex-col md:flex-row justify-between items-start text-ash max-w-7xl gap-4 md:gap-24">
        <div className="md:sticky top-64 flex flex-col gap-3 text-black flex-1 md:items-start ">
          <p className="text-md">MENU</p>
          <p className="text-sub-heading font-bold font-cormorant">
            Try Our Special Offers
          </p>
          <p className="text-md">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making it look
            like readable English.
          </p>
          <img
            src={sideimg}
            alt="side_img"
            className=" object-cover object-center lg:aspect-2/1 aspect-3/2 w-[100%]"
          />
          <Button text="See all dishes" extra="text-yellow " />
        </div>
        <div className="flex-1">
          {menuData.map((menuItem, id) => (
            <Dishes title={menuItem.title} data={menuItem.data} key={id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Menu;
