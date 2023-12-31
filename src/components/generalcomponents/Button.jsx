import React, { memo } from "react";

const Button = ({ text, extra = "" }) => {
  return (
    <button
      className={`border-[1px] ${extra} text-white border-yellow px-3 py-2 text-[12px] lg:text-[14px] hover:bg-yellow transition-colors duration-700 `}
    >
      {text}
    </button>
  );
};

export default memo(Button);
