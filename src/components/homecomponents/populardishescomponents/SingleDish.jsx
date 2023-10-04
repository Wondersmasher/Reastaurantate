import React from "react";

const SingleDish = ({ dish }) => {
  return (
    <div className="flex flex-col gap-[1px]">
      <img
        src={dish.img}
        alt={dish.title}
        className="w-full aspect-video object-center object-cover"
      />
      <div className="flex flex-1 justify-between my-2 border-b-[1px] w-full">
        <p className="font-cormorant font-bold  text-lg">{dish.title}</p>
        <p className="font-bold">${dish.price}</p>
      </div>
      <p className="text-sm">{dish.text}</p>
    </div>
  );
};

export default SingleDish;
