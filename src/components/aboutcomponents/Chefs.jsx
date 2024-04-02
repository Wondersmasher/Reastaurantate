import React from "react";
import { Section } from "../generalcomponents";
import { ourChef } from "../../assets/datas";

const Chefs = () => {
  return (
    <Section bg='p'>
      <div className='flex-1 flex flex-col items-center text-black max-w-7xl gap-2'>
        <p className='text-md border-y-[1px] border-black uppercase font-cormorant w-fit'>
          Team
        </p>
        <p className='text-sub-heading font-cormorant text-center'>
          Meet our professional chefs
        </p>
        <div className='flex gap-4 flex-wrap lg:flex-nowrap justify-'>
          {ourChef.map((chef, id) => {
            return (
              <div
                key={id}
                className='flex flex-col justify-center items-center flex-auto border-2 border-red-500'
              >
                <img
                  src={chef.img}
                  alt={chef.name}
                  className=' bg-chef-bg aspect-square object-cover object-center w-full'
                />
                <p className='mt-2'>{chef.name}</p>
                <p>{chef.position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Chefs;
