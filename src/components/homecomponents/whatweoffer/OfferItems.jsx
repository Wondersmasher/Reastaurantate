import React from "react";

const OfferItems = ({ item }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center border-[15px] border-midblack p-8 flex-1">
      {item.icon}
      <p className="font-cormorant text-center">{item.title}</p>
    </div>
  );
};

export default OfferItems;
