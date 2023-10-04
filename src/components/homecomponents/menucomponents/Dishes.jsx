import React, { memo } from "react";
import Dish from "./Dish";

const Dishes = ({ data, title }) => {
  return (
    <div className="flex flex-col gap-4 text-black my-4">
      <p className="text-[30px] font-bold font-cormorant">{title}</p>
      {data.map((singleMenu, id) => (
        <Dish key={id} menu={singleMenu} />
      ))}
    </div>
  );
};

export default memo(Dishes);
