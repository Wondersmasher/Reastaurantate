import React from "react";
import Section from "../generalcomponents/Section";

const MidNav = () => {
  const menus = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Menu",
      path: "/",
    },
    {
      title: "Reservation",
      path: "/",
    },
    {
      title: "Gallery",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];
  const icons = [
    {
      logo: "twitter",
      path: "",
    },
  ];
  return (
    <Section py="py-2 md:border-t-[1px] md:border-b-[1px] md:border-ash">
      <nav className="flex-1 md:flex justify-between items-center text-ash hidden max-w-7xl">
        <div className="flex gap-6 justify-center items-center text-sm lg:text-md">
          {menus.map((menu, id) => (
            <div key={id}>{menu.title}</div>
          ))}
        </div>
        <div className="flex gap-6 justify-center items-center">
          {icons.map((icon, id) => (
            <a key={id}>{icon.logo}</a>
          ))}
        </div>
      </nav>
    </Section>
  );
};

export default MidNav;
