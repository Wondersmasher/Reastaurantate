import React from "react";
import { Section } from "../generalcomponents";
import gallery1 from "../../assets/images/gallery2.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";

const AboutGallery = () => {
  return (
    <Section bg="w">
      <div className="flex-1text-black max-w-7xl flex flex-col justify-center items-center gap-2">
        <p className="text-md border-y-[1px] border-yellow uppercase font-cormorant w-fit ">
          Gallery
        </p>
        <p className="text-sub-heading font-cormorant">What we make</p>
        <div className="flex md:flex-row flex-col gap-2 justify-center mt-6">
          <div className="flex flex-col md gap-2 w-[100%] md:w-[24%] ">
            <img
              src={gallery1}
              alt="gallery1"
              className="aspect-square object-cover object-center"
            />
            <img
              src={gallery2}
              alt="gallery2"
              className="aspect-square object-cover object-center "
            />
          </div>
          <img
            src={gallery3}
            alt="gallery3"
            className="aspect-square object-cover w-[100%] md:w-[48%] object-center"
          />
          <div className="flex flex-col gap-2 w-[100%] md:w-[24%]">
            <img
              src={gallery4}
              alt="gallery4"
              className="aspect-square object-cover object-center"
            />
            <img
              src={gallery5}
              alt="gallery5"
              className="aspect-square object-cover object-center"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutGallery;
