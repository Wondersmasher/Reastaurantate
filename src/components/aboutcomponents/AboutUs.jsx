import React from "react";
import { Josephine, Section } from "../generalcomponents";
import aboutusimg from "../../assets/images/heroimg.png";

const AboutUs = () => {
  return (
    <Section bg="w">
      <div className="flex-1 flex md:flex-row flex-col-reverse justify-betwee md:items-center max-w-7xl pt-6 xl:gap-24 lg:gap-14 md:gap-12 gap-8 lg:px-8 xl:px-24">
        <div className="md:w-[55%] w-full flex flex-col gap-2">
          <p className="text-md border-y-[1px] border-black uppercase font-cormorant w-fit">
            About us
          </p>
          <p className="text-sub-heading font-cormorant">
            Quality and Tradition
          </p>
          <p className="text-justify text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            ducimus. Necessitatibus officiis asperiores modi commodi natus
            adipisci, cumque quam et ad voluptates, aliquam sed expedita vel.
            Aperiam iusto rerum possimus repellendus mollitia dolore quisquam
            similique molestias quidem suscipit id debitis ducimus dignissimos
            voluptatem, ab, enim numquam sequi voluptates optio culpa?
          </p>
          <Josephine />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={aboutusimg}
            alt="about us img"
            className="rounded-tr-[50%] object-center object-cover w-[100%]  h-full min-h-[23rem] max-h-[30rem] "
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
