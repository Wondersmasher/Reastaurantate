import React from "react";
import Section from "../../generalcomponents/Section";
import { menuIcons, menus } from "../../../assets/datas";
const MidNav = () => {
  return (
    <Section
      py="py-2 md:border-t-[1px] md:border-b-[1px] md:border-ash"
      bg="mid-black"
    >
      <nav className="flex-1 md:flex justify-between items-center text-ash hidden max-w-7xl">
        <div className="flex gap-6 justify-center items-center text-sm lg:text-md">
          {menus.map((menu, id) => (
            <div key={id}>{menu.title}</div>
          ))}
        </div>
        <div className="flex gap-3 justify-center items-center">
          {menuIcons.map((icon, id) => (
            <a key={id}>{icon.logo}</a>
          ))}
        </div>
      </nav>
    </Section>
  );
};

export default MidNav;
