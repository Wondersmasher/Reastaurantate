import React, { memo } from "react";

const Section = ({ children, bg, py = "py-16 md:py-24" }) => {
  return (
    <section
      className={`${
        bg === "p" ? "bg-light-pink" : bg === "w" ? "bg-white" : "bg-black"
      } ${py} px-8 md:px-16 lg:px-32 flex  justify-center items-center`}
    >
      {children}
    </section>
  );
};

export default memo(Section);
