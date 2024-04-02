import React, { memo } from "react";
import { cn } from "../../lib/cn";

const Button = ({ text, extra = "" }) => {
  return (
    <button
      className={cn(
        `border-[1px] text-white border-yellow px-3 py-2 text-[12px] lg:text-[14px] hover:bg-yellow transition-colors duration-700 `,
        extra
      )}
    >
      {text}
    </button>
  );
};

export default memo(Button);
