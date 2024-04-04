import React from "react";
import { cn } from "../../lib/cn";

const SplashImage = ({ image }) => {
  return (
    <div
      className={cn(`object-cover object-center bg-no-repeat bg-cover py-24 md:py-32)`, image)}
    ></div>
  );
};

export default SplashImage;
