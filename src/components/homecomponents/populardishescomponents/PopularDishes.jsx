import React from "react";
import Section from "../../generalcomponents/Section";
import SingleDish from "./SingleDish";
import Button from "../../generalcomponents/Button";
import { popularDishes } from "../../../assets/datas";
const PopularDishes = () => {
  return (
    <Section bg="w">
      <div className="flex-1 flex flex-col gap-2 items-center">
        <p className="text-md border-y-[1px]">MENU</p>
        <p className="text-sub-heading font-cormorant">Popular Dishes</p>
        <p className="text-center text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Tenetur consectetur odit dolores, nesciunt nihil aspernatur! Facilis
          ea fuga at obcaecati.
        </p>
        <div className="flex flex-1 flex-col md:flex-row gap-4 mt-6">
          {popularDishes.map((dish, id) => {
            return <SingleDish key={id} dish={dish} />;
          })}
        </div>
        <Button text="See all dishes" extra="text-yellow" />
      </div>
    </Section>
  );
};

export default PopularDishes;
