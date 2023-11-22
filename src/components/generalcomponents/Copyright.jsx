import React from "react";
import Section from "./Section";
const Copyright = () => {
  return (
    <Section py="py-0">
      <p className="text-center border-t-[1px] w-full text-white text-copyright py-2">
        © Copyright - Restaurantate | Designed by{" "}
        <span className="text-yellow">Ezekiel</span> - Powered by{" "}
        <span className="text-yellow">VictorFlow Templates</span>
      </p>
    </Section>
  );
};

export default Copyright;
