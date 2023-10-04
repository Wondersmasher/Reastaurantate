import React from "react";
import heroimg from "../../assets/images/story.png";
const Img = () => {
  return (
    <img
      src={heroimg}
      alt="/"
      className="w-[100%] h-[15rem] md:h-[30rem] object-center object-cover"
    />
  );
};

export default Img;
