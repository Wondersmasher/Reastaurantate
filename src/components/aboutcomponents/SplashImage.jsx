import React from "react";

const SplashImage = ({ image }) => {
  return (
    <div
      className={` ${image} object-cover object-center bg-no-repeat bg-cover py-24 md:py-32`}
    ></div>
  );
};

export default SplashImage;
