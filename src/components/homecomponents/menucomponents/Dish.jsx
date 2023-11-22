import React, { memo } from "react";

const Dish = ({ menu }) => {
  return (
    <div className="flex items-center gap-4 p-2 shadow-md cursor-pointer hover:bg-yellow hover:shadow-xl transition-colors duration-700 hover:text-white">
      <img
        src={menu.img}
        alt={menu.title}
        className="h-12 w-12 rounded-full object-cover object-center"
      />
      <div className="flex flex-col flex-1">
        <p className="font-cormorant font-bold text-[20px]">{menu.title}</p>
        <div className="flex gap-2 items-center justify-between text-lg">
          <p className="text-md">{menu.text}</p>
          <p className=" text-md font-bold">${menu.price}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Dish);
