import React from "react";
import Button from "../generalcomponents/Button";
const Reservation = () => {
  return (
    <section className="bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat w-full py-16 md:py-24 px-8 md:px-16 lg:px-32 flex  justify-center">
      <div className="bg-opacity-95 bg-black p-16 flex justify-center flex-col gap-4 w-[100%]max-w-3xl">
        <p className="text-md text-ash border-y-[1px] border-y-yellow w-fit self-center">
          WORKING HOURS
        </p>
        <p className="text-sub-heading font-cormorant self-center text-ash">
          Book your table now
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name=""
            id=""
            className="flex-1 bg-inherit border-ash border-[1px] focus:outline-none p-2 text-ash"
            placeholder="Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="flex-1 bg-inherit border-ash border-[1px] focus:outline-none p-2 text-ash"
            placeholder="E-mail"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          <input
            type="tel"
            name=""
            id=""
            className="flex-1 bg-inherit border-ash border-[1px] focus:outline-none p-2 text-ash"
            placeholder="Phone Number"
          />
          <input
            type="time"
            name=""
            id=""
            className="flex-1 bg-inherit border-ash border-[1px] focus:outline-none p-2 text-ash"
            placeholder="Timing"
          />
        </div>
        <div className="self-end">
          <Button text="Book Now" />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
