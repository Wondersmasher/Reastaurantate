import React, { memo } from "react";

const Section = ({ children, bg, py = "py-8" }) => {
  return (
    <section
      className={`px-8 ${py} md:px-16 lg:px-32 flex bg-[#292E36] justify-center items-center`}
    >
      {children}
    </section>
  );
};

export default memo(Section);
