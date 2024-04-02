import React, { memo } from "react";
import { cn } from "../../lib/cn";

const Section = ({ children, bg, py = "py-16 md:py-24" }) => {
  return (
    <section
      className={cn(
        "px-8 md:px-16 lg:px-32 flex  justify-center items-center",
        bg === "p" ? "bg-light-pink" : bg === "w" ? "bg-white" : "bg-black",
        py
      )}
    >
      {children}
    </section>
  );
};

export default memo(Section);
